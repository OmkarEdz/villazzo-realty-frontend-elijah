"use strict";
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 4683:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Header = ({ navigation , global  })=>{
    const myLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    let navElements = navigation.attributes.Navigation;
    let mainNavigation = [];
    let menucount = 0;
    navElements.forEach((element, index)=>{
        if (element.__component === "shared.header-navigation") {
            console.log(index);
            mainNavigation.push(element);
            if (index === 0) {
                menucount = 0;
                mainNavigation[menucount].submenu = [];
            } else {
                menucount = menucount + 1;
                mainNavigation[menucount].submenu = [];
            }
        } else {
            mainNavigation[menucount].submenu.push(element);
        }
    });
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
            axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(`${"https://villazzo-realty-backend-production.up.railway.app"}/api/contactforms`, {
                "data": {
                    firstName: fullname,
                    lastName: lastName,
                    email: email,
                    phoneNo: phone,
                    message: message
                }
            });
            const qs = __webpack_require__(7104);
            axios__WEBPACK_IMPORTED_MODULE_6__["default"].post("https://webdevfolio.com/Villazzomail/Villazzomail.php", qs.stringify({
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "header",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "main-wrap container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mobile-nav",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "navbar navbar-expand-lg navbar-light hideOnDesk",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "navbar-toggler",
                                            type: "button",
                                            onClick: ()=>toggleMenu(toggleMenuClass = !toggleMenuClass),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-bars",
                                                "aria-hidden": "true"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `navbar-collapse ${toggleMenuClass ? "" : "collapse"}`,
                                            id: "navbarNavDropdown",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "navbar-nav",
                                                children: [
                                                    mainNavigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "nav-item",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: menu.URL,
                                                                    className: `nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`,
                                                                    onClick: ()=>subMenuToggleMenu(subMenuClass = !subMenuClass),
                                                                    children: [
                                                                        menu.Label,
                                                                        menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "arrow",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-chevron-down",
                                                                                "aria-hidden": "true"
                                                                            })
                                                                        }) : ""
                                                                    ]
                                                                }, `nav-link-mobile${index}`),
                                                                menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: `dropdown-menu ${subMenuClass ? "active" : ""}`,
                                                                    children: menu.submenu.map((submenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                className: "dropdown-item",
                                                                                href: submenu.URL,
                                                                                children: submenu.Label
                                                                            }, `nav-menu-item${index}dd${submenu.Label}`)
                                                                        }, `nav-li-mobile${index}sub${submenu.Label}`))
                                                                }, `nav-submenu-mobile${index}`) : ""
                                                            ]
                                                        }, `nav-menu-mobile${index}`)),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-item cursor",
                                                        onClick: onAddClick,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link ",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo-wrap",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "villazzo-logo-wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "main-logo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                loader: myLoader,
                                                src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__/* .getStrapiMedia */ .$)(global.attributes.companyLogo),
                                                alt: "Image",
                                                layout: "fill"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "visit-text",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "visit-text-wrap",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Visit Our Sites"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "drop-down mb-drop",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-solid fa-caret-down"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "dropdownMenu",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "https://www.villazzo.com/",
                                                                    children: "VILLAZZO HOTELS"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "http://www.global-luxury-villas.com/",
                                                                    children: "GREAT VILLA DEALS"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "visit-text-wrap",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "FAVORITES ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fa fa-star"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inquiry-wrap",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "inquiry",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:+1(305)777 0146",
                                            className: "desktop-inquiry-call",
                                            children: "+1 (877) VILLAZZO"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:+1(305)777 0146",
                                            className: "mobile-inquiry-call",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa fa-phone",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "see-more-text",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "see-more-text-wrap",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "SEE MORE OPTIONS"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "drop-down",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-caret-down"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "dropdownMenu",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "mailto:villazzorealty@villazzo.com",
                                                            children: "villazzorealty@villazzo.com"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "tel:+1 (305) 340-2727",
                                                            children: "+1 (305) 340-2727"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inqury-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: onAddClick,
                                children: "INQUIRE"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "navbar navbar-expand-lg navbar-light bg-light hideOnMob",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-fluid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarNavDropdown",
                                "aria-controls": "navbarNavDropdown",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "collapse navbar-collapse",
                                id: "navbarNavDropdown",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "navbar-nav",
                                    children: [
                                        mainNavigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: `nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`,
                                                        href: menu.URL,
                                                        children: menu.Label
                                                    }, `nav-links-desk${index}`),
                                                    menu.submenu.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "dropdown-menu",
                                                        children: menu.submenu.map((submenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "dropdown-item",
                                                                    href: submenu.URL,
                                                                    children: submenu.Label
                                                                }, `nav-drop-item-desk${index}dd${submenu.Label}`)
                                                            }, `nav-li-desk${index}dd${submenu.Label}`))
                                                    }, `nav-drop-desk${index}`) : ""
                                                ]
                                            }, `nav-menu-desk${index}`)),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "nav-item cursor",
                                            onClick: onAddClick,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "nav-link ",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
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
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;