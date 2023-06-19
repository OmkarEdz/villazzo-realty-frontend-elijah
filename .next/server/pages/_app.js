"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalContext": () => (/* binding */ GlobalContext),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6017);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./pages/_app.js










// Store Strapi Global object in context
const GlobalContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const MyApp = ({ Component , pageProps  })=>{
    const { global  } = pageProps;
    // setTimeout(() => {
    //   document.body.classList.add("loadVdo");
    // }, 2500);  
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(GlobalContext.Provider, {
            value: global.attributes,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx)=>{
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await app["default"].getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const globalRes = await (0,api/* fetchAPI */.I)("/global", {
        populate: "*"
    });
    // Pass the data to our page via props
    return {
        props: {
            ...appProps,
            pageProps: {
                global: globalRes.data
            }
        }
    };
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [130,217,17], () => (__webpack_exec__(8016)));
module.exports = __webpack_exports__;

})();