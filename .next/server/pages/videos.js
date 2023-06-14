"use strict";
(() => {
var exports = {};
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 6977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4683);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4626);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6017);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_2__, _components_header__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_8__]);
([_components_footer__WEBPACK_IMPORTED_MODULE_2__, _components_header__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Videos = ({ global , videospage , footerData , navigation ,  })=>{
    let videosList = videospage.attributes.video;
    let mainvideosList = [];
    videosList.forEach((element, index)=>{
        mainvideosList.push(element);
    });
    const moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    // moreBtn.current.classList.remove("show_BTN");
    // if (videospage.attributes.video.length > 4) {
    //   moreBtn.current.classList.add("show_BTN");
    // }
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    const { 0: showMore , 1: setShowMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const youtubeVideo = (e)=>{
        mdl.current.classList.add("show_popup");
        e.target.classList.add("active");
        let param = e.target.parentNode.getAttribute("data-url");
        console.log(param);
        mdlIframe.current.setAttribute("src", param);
        setTimeout(()=>{
            mdlLoader.current.classList.add("hide_loader");
            mdlContent.current.classList.add("show_Content");
        }, 2500);
    };
    const onCloseClick = (e)=>{
        mdl.current.classList.remove("show_popup");
        mdlIframe.current.setAttribute("src", "");
        mdlLoader.current.classList.remove("hide_loader");
        mdlContent.current.classList.remove("show_Content");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-img bg-white sold_pg_wrap videos_pg_wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        navigation: navigation,
                        global: global
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "buttons-wrap video-wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "video-heading",
                                    children: "VIDEOS"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `video-wrap ${showMore ? "show-all" : ""}`,
                                    children: [
                                        mainvideosList.map((element, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "video-box",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "video_item_wrap",
                                                        "data-url": element.youtubeEmebedURL,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                                src: element.youtubeEmebedURL,
                                                                title: "YouTube video player"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "youtubeIcon",
                                                                onClick: youtubeVideo
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "video-name",
                                                        children: element.heading
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "video-content",
                                                        children: element.subheading
                                                    })
                                                ]
                                            }, index)),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "video-btn contact-btn sold-btn moreBtnHide",
                                            ref: moreBtn,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>setShowMore(!showMore),
                                                children: showMore ? "Less" : "More"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "main_popup video-modal",
                                    ref: mdl,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "custom_model",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "loader",
                                                ref: mdlLoader
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "custom_model_dialog",
                                                ref: mdlContent,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        onClick: onCloseClick,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa-solid fa-xmark"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                        ref: mdlIframe,
                                                        id: "popupIframe",
                                                        src: "https://www.youtube.com/embed/fx3kvqPuTB4",
                                                        title: "YouTube video player"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                footerProp: footerData
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [globalRes, videospageRes, footerRes, navigationRes, ] = await Promise.all([
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/global", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/videospage", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/footer", {
            populate: "deep"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/header-nav", {
            populate: "*"
        }), 
    ]);
    return {
        props: {
            global: globalRes.data,
            videospage: videospageRes.data,
            footerData: footerRes.data,
            navigation: navigationRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Videos);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [130,676,61,17,151,683], () => (__webpack_exec__(6977)));
module.exports = __webpack_exports__;

})();