"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 6151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6017);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Footer = ({ footerProp  })=>{
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
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
            axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(`${"https://admin.villazzorealty.com"}/api/contactforms`, {
                "data": {
                    firstName: fullname,
                    lastName: lastName,
                    email: email,
                    phoneNo: phone,
                    message: message
                }
            });
            const qs = __webpack_require__(7104);
            axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("https://webdevfolio.com/Villazzomail/Villazzomail.php", qs.stringify({
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer-bg-color",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-container container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "footer-wrap",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "footer-links",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "footer-sec1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "toll-wrap left-section",
                                                dangerouslySetInnerHTML: {
                                                    __html: footerProp.attributes.leftSectionContent
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "navigate-wrap",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-navigate",
                                                        children: "NAVIGATE"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "navigate",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "navigate-links",
                                                            children: footerProp.attributes.navigateLinksLeft?.map((value, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "navigate-sec1",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: value.URL,
                                                                        children: value.Label
                                                                    }, `left-links${index}`)
                                                                }, `left${index}`))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "navigate-links",
                                                            children: footerProp.attributes.navigateLinksRight.map((value, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "navigate-sec1",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: value.URL,
                                                                        children: value.Label
                                                                    }, `right-links${index}`)
                                                                }, `right${index}`))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "connect-wrap",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "footer-icons",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "CONNECT"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "icons-wrap",
                                                                children: footerProp.attributes.socialConnect.map((value, index)=>value.Account == "Email" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: value.URL,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa-solid fa-envelope"
                                                                        }, `ico${index}`)
                                                                    }, `footer-links${index}`) : value.URL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: value.URL,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: `fa-brands fa-${value.Account.toLowerCase()}`
                                                                        })
                                                                    }, `social${index}`))
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer-images-wrap",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "footer-images",
                                        children: footerProp.attributes.featuredImages.map((fImage, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: fImage.URL,
                                                className: "footer-img",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "featured-img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            loader: myLoader,
                                                            src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__/* .getStrapiMedia */ .$)(fImage.Hero),
                                                            layout: "fill",
                                                            alt: "footerImage"
                                                        }, `featuredImage${index}`)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "footer-logo-img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            loader: myLoader,
                                                            src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__/* .getStrapiMedia */ .$)(fImage.Logo),
                                                            layout: "fill",
                                                            alt: "Logo"
                                                        }, `featuredImageLogo${index}`)
                                                    })
                                                ]
                                            }, `featuredImages${index}`))
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer-bottom",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-page-links",
                    children: footerProp.attributes.copyrightLinks.map((value, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "year",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: value.URL,
                                children: value.Label
                            }, `links${index}`)
                        }, `copyright${index}`))
                })
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
                                                                    "max-length": "12"
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;