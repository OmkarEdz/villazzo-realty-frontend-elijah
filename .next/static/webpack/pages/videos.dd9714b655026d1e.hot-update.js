"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videos",{

/***/ "./pages/videos.js":
/*!*************************!*\
  !*** ./pages/videos.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    if (moreBtn.current) {\n        moreBtn.current.classList.remove(\"show_BTN\");\n        if (videospage.attributes.video.length > 4) {\n            moreBtn.current.classList.add(\"show_BTN\");\n        }\n    }\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        var _$param = e.target.parentNode.getAttribute(\"data-url\");\n        console.log(_$param);\n        mdlIframe.current.setAttribute(\"src\", _$param);\n        setTimeout(function() {\n            mdlLoader.current.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlIframe.current.setAttribute(\"src\", \"\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: [\n                                        mainvideosList.map(function(element, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"video-box\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video_item_wrap\",\n                                                        \"data-url\": element.youtubeEmebedURL,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                src: element.youtubeEmebedURL,\n                                                                title: \"YouTube video player\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                                lineNumber: 69,\n                                                                columnNumber: 19\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"youtubeIcon\",\n                                                                onClick: youtubeVideo\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"video-name\",\n                                                        children: element.heading\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"video-content\",\n                                                        children: element.subheading\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, _this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn moreBtnHide\",\n                                            ref: moreBtn,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main_popup video-modal\",\n                                    ref: mdl,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"custom_model\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"loader\",\n                                                ref: mdlLoader\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"custom_model_dialog\",\n                                                ref: mdlContent,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        onClick: onCloseClick,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-xmark\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 45\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                        ref: mdlIframe,\n                                                        id: \"popupIframe\",\n                                                        src: \"https://www.youtube.com/embed/fx3kvqPuTB4\",\n                                                        title: \"YouTube video player\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Desktop\\\\Villazzo\\\\Villazzo-realty\\\\villazzo-frontend\\\\pages\\\\videos.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"pK8qxnSrYnfNljzF1ZITM/+3Mmk=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQUU4QixFQUFFLEVBQUMsYUFBYTt3REFBQ3BDLEdBQUcsRUFBQywyQ0FBMkM7d0RBQUMyQixLQUFLLEVBQUMsc0JBQXNCOzs7Ozs2REFBVTs7Ozs7O3FEQUMzSDs7Ozs7OzZDQUNGOzs7Ozt5Q0FDRjs7Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDdEQsMERBQU07Z0JBQUNnRSxVQUFVLEVBQUV2RCxVQUFVOzs7OztxQkFBSTs7b0JBQ2pDLENBQ0o7QUFDSCxDQUFDO0dBdEZLSCxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBaUhaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy5qcz9mOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5jb25zdCBWaWRlb3MgPSAoe1xyXG4gIGdsb2JhbCxcclxuICB2aWRlb3NwYWdlLFxyXG4gIGZvb3RlckRhdGEsXHJcbiAgbmF2aWdhdGlvbixcclxufSkgPT4ge1xyXG4gICAgbGV0IHZpZGVvc0xpc3QgPSB2aWRlb3NwYWdlLmF0dHJpYnV0ZXMudmlkZW9cclxuICAgIGxldCBtYWludmlkZW9zTGlzdCA9IFtdXHJcbiAgICB2aWRlb3NMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIG1haW52aWRlb3NMaXN0LnB1c2goZWxlbWVudClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IG1vcmVCdG4gPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBpZiAobW9yZUJ0bi5jdXJyZW50KSB7XHJcbiAgICAgIG1vcmVCdG4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd19CVE5cIik7XHJcbiAgICAgIGlmICh2aWRlb3NwYWdlLmF0dHJpYnV0ZXMudmlkZW8ubGVuZ3RoID4gNCkge1xyXG4gICAgICAgIG1vcmVCdG4uY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19CVE5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG1kbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG1kbElmcmFtZSA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG1kbExvYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG1kbENvbnRlbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCB5b3V0dWJlVmlkZW8gPSAoZSkgPT4ge1xyXG4gICAgICBtZGwuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19wb3B1cFwiKTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgbGV0IHBhcmFtID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKTtcclxuICAgICAgY29uc29sZS5sb2cocGFyYW0pOyBcclxuICAgICAgbWRsSWZyYW1lLmN1cnJlbnQuc2V0QXR0cmlidXRlKFwic3JjXCIscGFyYW0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZV9sb2FkZXJcIik7XHJcbiAgICAgICAgbWRsQ29udGVudC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93X0NvbnRlbnRcIik7XHJcbiAgICAgIH0sIDI1MDApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG9uQ2xvc2VDbGljayA9IChlKSA9PiB7XHJcbiAgICAgIG1kbC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X3BvcHVwXCIpO1xyXG4gICAgICBtZGxJZnJhbWUuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIlwiKTtcclxuICAgICAgbWRsTG9hZGVyLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVfbG9hZGVyXCIpO1xyXG4gICAgICBtZGxDb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfQ29udGVudFwiKTtcclxuICAgIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW1nIGJnLXdoaXRlIHNvbGRfcGdfd3JhcCB2aWRlb3NfcGdfd3JhcFwiPlxyXG4gICAgICAgIDxIZWFkZXIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gZ2xvYmFsPXtnbG9iYWx9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy13cmFwIHZpZGVvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvLWhlYWRpbmdcIj5WSURFT1M8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpZGVvLXdyYXAgJHtzaG93TW9yZSA/IFwic2hvdy1hbGxcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAge21haW52aWRlb3NMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInZpZGVvLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19pdGVtX3dyYXBcIiBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT5cclxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0gdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ5b3V0dWJlSWNvblwiIG9uQ2xpY2s9e3lvdXR1YmVWaWRlb30+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidmlkZW8tbmFtZVwiPntlbGVtZW50LmhlYWRpbmd9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZGVvLWNvbnRlbnRcIj57ZWxlbWVudC5zdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJ0biBjb250YWN0LWJ0biBzb2xkLWJ0biBtb3JlQnRuSGlkZVwiIHJlZj17bW9yZUJ0bn0+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9yZSghc2hvd01vcmUpfT5cclxuICAgICAgICAgICAgICAgICAge3Nob3dNb3JlID8gXCJMZXNzXCIgOiBcIk1vcmVcIn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3B1cCB2aWRlby1tb2RhbFwiIHJlZj17bWRsfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiByZWY9e21kbExvYWRlcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbF9kaWFsb2dcIiByZWY9e21kbENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsb3NlQ2xpY2t9PjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSByZWY9e21kbElmcmFtZX0gaWQ9XCJwb3B1cElmcmFtZVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2Z4M2t2cVB1VEI0XCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2Plx0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIGZvb3RlclByb3A9e2Zvb3RlckRhdGF9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXHJcbiAgY29uc3QgW1xyXG4gICAgZ2xvYmFsUmVzLFxyXG4gICAgdmlkZW9zcGFnZVJlcyxcclxuICAgIGZvb3RlclJlcyxcclxuICAgIG5hdmlnYXRpb25SZXMsXHJcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcclxuICAgIGZldGNoQVBJKFwiL3ZpZGVvc3BhZ2VcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXHJcbiAgICBmZXRjaEFQSShcIi9mb290ZXJcIiwgeyBwb3B1bGF0ZTogXCJkZWVwXCIgfSksXHJcbiAgICBmZXRjaEFQSShcIi9oZWFkZXItbmF2XCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxyXG4gIF0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLFxyXG4gICAgICB2aWRlb3NwYWdlOiB2aWRlb3NwYWdlUmVzLmRhdGEsXHJcbiAgICAgIGZvb3RlckRhdGE6IGZvb3RlclJlcy5kYXRhLFxyXG4gICAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uUmVzLmRhdGEsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJMaW5rIiwiYXhpb3MiLCJWaWRlb3MiLCJnbG9iYWwiLCJ2aWRlb3NwYWdlIiwiZm9vdGVyRGF0YSIsIm5hdmlnYXRpb24iLCJ2aWRlb3NMaXN0IiwiYXR0cmlidXRlcyIsInZpZGVvIiwibWFpbnZpZGVvc0xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsIm1vcmVCdG4iLCJ1c2VSZWYiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibGVuZ3RoIiwiYWRkIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwibWRsIiwibWRsSWZyYW1lIiwibWRsTG9hZGVyIiwibWRsQ29udGVudCIsInlvdXR1YmVWaWRlbyIsImUiLCJ0YXJnZXQiLCJwYXJhbSIsInBhcmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsIm9uQ2xvc2VDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZGF0YS11cmwiLCJ5b3V0dWJlRW1lYmVkVVJMIiwiaWZyYW1lIiwidGl0bGUiLCJhIiwib25DbGljayIsImgyIiwiaGVhZGluZyIsInAiLCJzdWJoZWFkaW5nIiwicmVmIiwiaSIsImlkIiwiZm9vdGVyUHJvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});