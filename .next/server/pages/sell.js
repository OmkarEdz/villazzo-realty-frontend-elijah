"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 6694:
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


// import Articles from "../components/articles";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import menuIcon from "../assets/images/villazzo-symbol.png"







const Sell = ({ global , homepage , footerData , navigation ,  })=>{
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    const { 0: toggleMenuClass , 1: toggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: subMenuClass , 1: subMenuToggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const onAddClick = (e)=>{
        navRef.current.classList.add("show_popup");
    };
    const onRemoveClick = (e)=>{
        navRef.current.classList.remove("show_popup");
        setShowSuccessMessage(false);
        setShowFailureMessage(false);
    };
    // States for contact form fields
    const { 0: fullname , 1: setFullname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: lastName , 1: setlastName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onchange = (event)=>{
        const result = event.target.value.replace(/\D/g, "");
        setPhone(result);
    };
    //   Form validation state
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    // Setting success or failure messages states
    const { 0: showSuccessMessage , 1: setShowSuccessMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showFailureMessage , 1: setShowFailureMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const re = /^[0-9\b]+$/;
    const handleChange = (e)=>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setPhone(e.target.value);
        }
    };
    // Validation check method
    const handleValidation = ()=>{
        let tempErrors = {};
        let isValid = true;
        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (lastName.length <= 0) {
            tempErrors["lastName"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }
        setErrors({
            ...tempErrors
        });
        console.log("errors", errors);
        return isValid;
    };
    // Handles the submit event on form submit.
    const handleSubmit = async (event)=>{
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        let isValidForm = handleValidation();
        if (isValidForm) {
            axios__WEBPACK_IMPORTED_MODULE_8__["default"].post(`${"https://villazzo-realty-backend-production.up.railway.app"}/api/contactforms`, {
                "data": {
                    firstName: fullname,
                    lastName: lastName,
                    email: email,
                    phoneNo: phone,
                    message: message
                }
            });
            const qs = __webpack_require__(7104);
            axios__WEBPACK_IMPORTED_MODULE_8__["default"].post("https://webdevfolio.com/Villazzomail/Villazzomail.php", qs.stringify({
                "firstName": fullname,
                "lastName": lastName,
                "email": email,
                "phoneNo": phone,
                "message": message
            })).then((res)=>{
                console.log(`statusCode: ${res.statusCode}`);
                console.log(res);
                console.log(`statusCode: ${res.data}`);
            }).catch((error)=>{
                console.error(error);
            });
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            // Reset form fields
            setFullname("");
            setlastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            return;
        }
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        // Reset form fields
        setFullname("");
        setlastName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-img",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "homepage-image",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "blankDiv"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                loop: true,
                                muted: true,
                                autoPlay: "autoplay",
                                playsinline: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: `${"https://villazzo-realty-backend-production.up.railway.app"}${global.attributes.videoURL}`,
                                        type: "video/mp4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: `${"https://villazzo-realty-backend-production.up.railway.app"}${global.attributes.videoURL}`,
                                        type: "video/webm"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        navigation: navigation,
                        global: global
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "buttons-wrap",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sell-search-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "selltxt",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "propertytxt",
                                                children: "SELL YOUR PROPERTY"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "We have represented many sellers in South Florida successfully sell their homes at the best prices. Allow us the opportunity to give you a property presentation to see what your condo or home can sell for and what we have to offer for you as a seller. Villazzo  has represented several record breaking sales."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sell-search-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "video-btn contact-btn",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: onAddClick,
                                                children: "Contact Us"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: navRef,
                                id: "popover",
                                className: "main_popup hide",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "custom_model",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "custom_model_dialog",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "custom_model_content",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    onClick: onRemoveClick,
                                                    className: "model_close",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-xmark"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "Popup_wrap",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                        onSubmit: handleSubmit,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "contact-form",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    children: "CONTACT US"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "contact-form-label",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    placeholder: "FIRST NAME",
                                                                                    type: "text",
                                                                                    value: fullname,
                                                                                    onChange: (e)=>{
                                                                                        setFullname(e.target.value);
                                                                                    },
                                                                                    name: "fullname",
                                                                                    className: "input-name contact-lebel"
                                                                                }),
                                                                                errors?.fullname && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "error_msg",
                                                                                    children: "First name cannot be empty."
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    placeholder: "LAST NAME",
                                                                                    name: "lastName",
                                                                                    type: "text",
                                                                                    value: lastName,
                                                                                    onChange: (e)=>{
                                                                                        setlastName(e.target.value);
                                                                                    },
                                                                                    className: "contact-lebel"
                                                                                }),
                                                                                errors?.lastName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "error_msg",
                                                                                    children: "Last name cannot be empty."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "contact-form-label",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    placeholder: "EMAIL ADDRESS",
                                                                                    type: "email",
                                                                                    name: "email",
                                                                                    value: email,
                                                                                    onChange: (e)=>{
                                                                                        setEmail(e.target.value);
                                                                                    },
                                                                                    className: "input-name contact-lebel"
                                                                                }),
                                                                                errors?.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "error_msg",
                                                                                    children: "Email cannot be empty."
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    placeholder: "PHONE",
                                                                                    type: "tel",
                                                                                    name: "phone",
                                                                                    pattern: "[0-9]*",
                                                                                    value: phone,
                                                                                    onChange: handleChange,
                                                                                    className: "input-name contact-lebel",
                                                                                    maxLength: "12"
                                                                                }),
                                                                                errors?.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "error_msg",
                                                                                    children: "Phone number cannot be empty."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "contact-form-label",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "form-item full-width",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                            name: "message",
                                                                            value: message,
                                                                            onChange: (e)=>{
                                                                                setMessage(e.target.value);
                                                                            },
                                                                            className: "form-message contact-lebel",
                                                                            rows: "4",
                                                                            cols: "50",
                                                                            placeholder: "MESSAGE"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "submit_btn_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        type: "submit",
                                                                        children: "Submit"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "final_msg_wrap",
                                                                    children: [
                                                                        showSuccessMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "thankyou_msg",
                                                                            children: "Thank you for your message! A team member from Villazzo Realty will get back to you shortly."
                                                                        }),
                                                                        showFailureMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "error_msg",
                                                                            children: "Please fill the form"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
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
    const [globalRes, homepageRes, footerRes, navigationRes, ] = await Promise.all([
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/global", {
            populate: "*"
        }),
        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchAPI */ .I)("/homepage", {
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
            homepage: homepageRes.data,
            footerData: footerRes.data,
            navigation: navigationRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sell);

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
var __webpack_exports__ = __webpack_require__.X(0, [130,676,61,17,151,683], () => (__webpack_exec__(6694)));
module.exports = __webpack_exports__;

})();