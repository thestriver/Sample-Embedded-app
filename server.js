require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const { default: Shopify, ApiVersion } = require('@shopify/shopify-api');
//koa routing middleware
const Router = require('koa-router');

const getSubscriptionUrl = require('./server/getSubscriptionUrl');


dotenv.config();
// dotenv.config({path:'process.env'});

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
  HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  API_VERSION: '2019-10',
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//Create the ACTIVE_SHOPIFY_SHOPS hash and track shops that complete OAuth
const ACTIVE_SHOPIFY_SHOPS = {};

//Adding the app to your server file
app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    server.keys = [Shopify.Context.API_SECRET_KEY];
    
    //Add the createShopifyAuth and verifyRequest middlewar
    server.use(
        createShopifyAuth({
        //   afterAuth(ctx) {
            async afterAuth(ctx) {
            
                const { shop, scope, accessToken } = ctx.state.shopify;
            ACTIVE_SHOPIFY_SHOPS[shop] = scope;

            const registration = await Shopify.Webhooks.Registry.register({
                shop,
                accessToken,
                path: '/webhooks',
                topic: 'APP_UNINSTALLED',
                apiVersion: ApiVersion.October20,
                webhookHandler: (_topic, shop, _body) => {
                  console.log('App uninstalled');
                  delete ACTIVE_SHOPIFY_SHOPS[shop];
                },
              });
            
              if (registration.success) {
                console.log('Successfully registered webhook!');
              } else {
                console.log('Failed to register webhook', registration.result);
              }

            // ctx.redirect(`/?shop=${shop}`);
            const returnUrl = `https://${Shopify.Context.HOST_NAME}?shop=${shop}`;
        const subscriptionUrl = await getSubscriptionUrl(accessToken, shop, returnUrl);
        ctx.redirect(subscriptionUrl);
          },
        }),
    );
    
    router.post("/graphql", verifyRequest({returnHeader: true}), async (ctx, next) => {
        await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    });
  
    const handleRequest = async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    };

    //Your app needs this to decide whether a new shop needs to perform OAuth to install it
    router.get("/", async (ctx) => {
        const shop = ctx.query.shop;
    
        if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
          ctx.redirect(`/auth?shop=${shop}`);
        } else {
          await handleRequest(ctx);
        }
    });
  
    router.get("(/_next/static/.*)", handleRequest);
    router.get("/_next/webpack-hmr", handleRequest);
    // router.get("(.*)", verifyRequest(), handleRequest)
    // router.get("(.*)", handleRequest);
    router.get("(.*)", verifyRequest({ accessMode: "offline" }), handleRequest);
  

    
    server.use(router.allowedMethods());
    server.use(router.routes());

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});