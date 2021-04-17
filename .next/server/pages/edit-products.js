module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/mahmud/Documents/Code/shopify-embedded-app/pages/edit-products.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '',\n      price: '',\n      variantId: '',\n      showToast: false\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('item');\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      price,\n      discount,\n      variantId\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__[\"Mutation\"], {\n      mutation: UPDATE_PRICE,\n      children: (handleSubmit, {\n        error,\n        data\n      }) => {\n        const showError = error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n          status: \"critical\",\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }, this);\n\n        const showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Toast\"], {\n          content: \"Sucessfully updated\",\n          onDismiss: () => this.setState({\n            showToast: false\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }, this);\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Frame\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n              children: [showToast, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: showError\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"DisplayText\"], {\n                  size: \"large\",\n                  children: name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 13\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n                    sectioned: true,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"].Group, {\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: price,\n                          disabled: true,\n                          label: \"Original price\",\n                          type: \"price\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 77,\n                          columnNumber: 21\n                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: discount,\n                          onChange: this.handleChange('discount'),\n                          label: \"Discounted price\",\n                          type: \"discount\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 84,\n                          columnNumber: 21\n                        }, this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 76,\n                        columnNumber: 19\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                        children: \"This sale price will expire in two weeks\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 92,\n                        columnNumber: 19\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 75,\n                      columnNumber: 17\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 15\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"PageActions\"], {\n                    primaryAction: [{\n                      content: 'Save',\n                      onAction: () => {\n                        const productVariableInput = {\n                          id: variantId,\n                          price: discount\n                        };\n                        handleSubmit({\n                          variables: {\n                            input: productVariableInput\n                          }\n                        });\n                      }\n                    }],\n                    secondaryActions: [{\n                      content: 'Remove discount'\n                    }]\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 15\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 13\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }, this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxrREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTs7QUFjQSxNQUFNQyxXQUFOLFNBQTBCQyw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUFBO0FBQUE7O0FBQUEsbUNBQ2hDO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGVBQVMsRUFBRSxFQUhMO0FBSU5DLGVBQVMsRUFBRTtBQUpMLEtBRGdDOztBQUFBLDBDQWdHeEJDLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0MsUUFBTCxDQUFjO0FBQUUsU0FBQ0YsS0FBRCxHQUFTQztBQUFYLE9BQWQs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O0FBQUE7QUFBQTtBQUFBLDhCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBd0JFLHFFQUFDLDREQUFEO0FBQ0UsaUNBQWEsRUFBRSxDQUNiO0FBQ0VDLDZCQUFPLEVBQUUsTUFEWDtBQUVFQyw4QkFBUSxFQUFFLE1BQU07QUFDWiw4QkFBTUMsb0JBQW9CLEdBQUc7QUFDekJqQiw0QkFBRSxFQUFFWCxTQURxQjtBQUV6QkQsK0JBQUssRUFBRUQ7QUFGa0IseUJBQTdCO0FBSUFxQixvQ0FBWSxDQUFDO0FBQ1RVLG1DQUFTLEVBQUU7QUFBRUMsaUNBQUssRUFBRUY7QUFBVDtBQURGLHlCQUFELENBQVo7QUFHSDtBQVZILHFCQURhLENBRGpCO0FBZUUsb0NBQWdCLEVBQUUsQ0FDaEI7QUFDRUYsNkJBQU8sRUFBRTtBQURYLHFCQURnQjtBQWZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBNkRIO0FBM0VPO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQStFRDs7QUE5RnVDOztBQThHM0IvQiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2VkaXQtcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQmFubmVyLFxuICBDYXJkLFxuICBEaXNwbGF5VGV4dCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgRnJhbWUsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgUGFnZUFjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgVG9hc3QsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5jb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXG4gIG11dGF0aW9uIHByb2R1Y3RWYXJpYW50VXBkYXRlKCRpbnB1dDogUHJvZHVjdFZhcmlhbnRJbnB1dCEpIHtcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBwcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICAgIHByb2R1Y3RWYXJpYW50IHtcbiAgICAgICAgaWRcbiAgICAgICAgcHJpY2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzY291bnQ6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgICB2YXJpYW50SWQ6ICcnLFxuICAgIHNob3dUb2FzdDogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2NvdW50OiB0aGlzLml0ZW1Ub0JlQ29uc3VtZWQoKSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE11dGF0aW9uXG4gICAgICAgICAgbXV0YXRpb249e1VQREFURV9QUklDRX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoaGFuZGxlU3VibWl0LCB7ZXJyb3IsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcbiAgICAgICAgICAgICAgICA8QmFubmVyIHN0YXR1cz1cImNyaXRpY2FsXCI+e2Vycm9yLm1lc3NhZ2V9PC9CYW5uZXI+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IHNob3dUb2FzdCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0VmFyaWFudFVwZGF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPFRvYXN0XG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VjZXNzZnVsbHkgdXBkYXRlZFwiXG4gICAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhbWU+XG4gICAgICA8UGFnZT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAge3Nob3dUb2FzdH1cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudGVkIHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogcHJvZHVjdFZhcmlhYmxlSW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW1vdmUgZGlzY291bnQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUGFnZT5cbiAgICAgIDwvRnJhbWU+XG4gICAgKTtcbn19XG48L011dGF0aW9uPlxuKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBzdG9yZS5nZXQoJ2l0ZW0nKTtcbiAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XG4gICAgY29uc3QgZGlzY291bnRlciA9IHByaWNlICogMC4xO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xuICAgIHJldHVybiAocHJpY2UgLSBkaXNjb3VudGVyKS50b0ZpeGVkKDIpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });