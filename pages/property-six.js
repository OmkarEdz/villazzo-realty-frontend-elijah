import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Link from 'next/link'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopDeals = ({
  global,
  propertysix,
  footerData,
  navigation,
}) => {
	// let newDevPropList = toptendeal.attributes.Proprties
	// let mainnewDevPropList = []
	// newDevPropList.forEach((element) => {
	// 	mainnewDevPropList.push(element)
	// })
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

	const [toggleMenuClass, toggleMenu] = useState(false)
  const [subMenuClass, subMenuToggleMenu] = useState(false)
  
  const navRef = React.useRef(null);
  const onAddClick = (e) => {
    navRef.current.classList.add("show_popup");
  };

  const onRemoveClick = (e) => {
    navRef.current.classList.remove("show_popup");
    setShowSuccessMessage(false);
        setShowFailureMessage(false);
  };
  
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onchange = event => {
    const result = event.target.value.replace(/\D/g, '');
    setPhone(result);
  };

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const re = /^[0-9\b]+$/;
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhone(e.target.value)
    }
  }

  // Validation check method
  const handleValidation = () => {
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
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    
    let isValidForm = handleValidation();

    if (isValidForm) {
      axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contactforms`,
        {
          "data": {
            firstName: fullname,
            lastName: lastName,
            email: email,
            phoneNo: phone,
            message: message,
          }
        }
      );

      const qs = require('qs');
        axios.post('https://webdevfolio.com/Villazzomail/Villazzomail.php',  qs.stringify({
            "firstName": fullname,
            "lastName": lastName,
            "email": email,
            "phoneNo": phone,
            "message": message,

        }))
        .then((res) => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res)
          console.log(`statusCode: ${res.data}`)
        })
        .catch((error) => {
          console.error(error)
        })
      
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

  
  const [isMounted, setIsMounted] = useState(false);
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && sliderForRef.current && sliderNavRef.current) {
      sliderForRef.current.slickGoTo(0, true);
      sliderNavRef.current.slickGoTo(0, true);
    }
  }, [isMounted]);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNavRef.current,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  
  return (
    <>
      <div className="bg-img bg-white new_dev_pg_wrap our-list-wrap">
        <Header navigation={navigation} global={global} />
		<div className="container container-xxl">
			<div className="buttons-wrap video-wrapper team-wrapper dev-wrapper full_wid_wrap">
				<h1 className="sold-heading">Our Listings</h1>
				<div className="pro_det_wrap">
        {isMounted && (
          <>
          <div className="pro_det_img_wrap">
            <Slider {...settingsFor} className="slider-for" ref={sliderForRef}>
              {propertysix.attributes.PropertyImgs.map((element, index, array) => (
              <div key={index} className="slide-img">
                  <Image
                    loader={myLoader}
                    // src={process.env.NEXT_PUBLIC_STRAPI_API_URL}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${element.ImgUrl}`}
                    key={`element${index}`}
                    className="img"
                    layout="fill"
                    alt="Villazzo"
                  />
                  <p className="for_sell_wrap">For Sell</p>
              </div>
              ))}
            </Slider>
            <Slider {...settingsNav} className="slider-nav" ref={sliderNavRef}>
              {propertysix.attributes.PropertyImgs.map((element, index, array) => (
                <div key={index} className="slide-img">
                    <Image
                      loader={myLoader}
                      // src={process.env.NEXT_PUBLIC_STRAPI_API_URL}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${element.ImgUrl}`}
                      key={`element${index}`}
                      className="img"
                      layout="fill"
                      alt="Villazzo"
                    />
                </div>
              ))}
            </Slider>
          </div>
          </>
           )}
          <div className="pro_det_cont_wrap">
            <div className="pro_det_row_wrap">
              <div className="pro_det_row_item">
                <p className="pro_det_lbl">Property Location</p>
                <p className="pro_det_value">{propertysix.attributes.PropertyImgDetails.PropertyLoc}</p>
              </div>
            </div>
            <div className="pro_det_row_wrap">
              <div className="pro_det_row_item">
                <p className="pro_det_lbl">Bedrooms</p>
                <p className="pro_det_value">{propertysix.attributes.PropertyImgDetails.Bedrooms}</p>
              </div>
              <div className="pro_det_row_item">
                <p className="pro_det_lbl">Bathrooms</p>
                <p className="pro_det_value">{propertysix.attributes.PropertyImgDetails.Bathrooms}</p>
              </div>
            </div>
            <div className="pro_det_row_wrap">
              <div className="pro_det_row_item">
                <p className="pro_det_lbl">Price</p>
                <p className="pro_det_value">{propertysix.attributes.PropertyImgDetails.Price}</p>
              </div>
            </div>
            <div className="pro_det_row_wrap">
              <div className="pro_det_row_item">
                <p className="pro_det_lbl">Description</p>
                <p className="pro_det_value">{propertysix.attributes.PropertyImgDetails.Description}</p>
              </div>
            </div>
            <div className="meet-left main-team">
                <p className="meet-left-img">
                  <a href={propertysix.attributes.PropertyImgDetails.MemberLink}>
                    <Image
                      loader={myLoader}
                      src= {`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${propertysix.attributes.PropertyImgDetails.MemberImgUrl}`}
                      className="header_image"
                      layout="fill"
                      alt="Villazzo"
                    />
                  </a>
                </p>
                <h3 className="meet-left-name">
                  <a href={propertysix.attributes.PropertyImgDetails.MemberLink} className="meet-left-name-link">{propertysix.attributes.PropertyImgDetails.MemberName}</a>
                </h3>
                <p className="broker">{propertysix.attributes.PropertyImgDetails.MemberDes}</p>
                <a className="number" href={`tel:${encodeURIComponent(propertysix.attributes.PropertyImgDetails.MemberPhone)}`}>{propertysix.attributes.PropertyImgDetails.MemberPhone}</a>
                <a className="email" href={`mailto:${encodeURIComponent(propertysix.attributes.PropertyImgDetails.MemberEmail)}`}>{propertysix.attributes.PropertyImgDetails.MemberEmail}</a>
            </div>
            <div className="video-btn contact-btn">
                  <a onClick={onAddClick}>Contact Us</a>
                </div>	
            <div className="find-hotel">
                  <a href="https://www.villazzo.com/">Find out more about our Villa Hotels</a>
                </div>
          </div>
        </div>
			</div>
      <div ref={navRef} id="popover" className="main_popup hide">
              <div className="custom_model">
                <div className="custom_model_dialog">
                  <div className="custom_model_content">
                    <a onClick={onRemoveClick} className="model_close"><i className="fa-solid fa-xmark"></i></a>
                    <div className="Popup_wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="contact-form">
                          <h2>CONTACT US</h2>
                          <div className="contact-form-label">
                            <div className="form-item">
                              <input
                                placeholder="FIRST NAME" 
                                type="text"
                                value={fullname}
                                onChange={(e) => {
                                  setFullname(e.target.value);
                                }}
                                name="fullname"
                                className="input-name contact-lebel"
                              />
                              {errors?.fullname && (
                                <p className="error_msg">First name cannot be empty.</p>
                              )}
                            </div>
                            <div className="form-item">
                              <input
                                placeholder="LAST NAME" 
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => {
                                  setlastName(e.target.value);
                                }}
                                className="contact-lebel"
                              />
                              {errors?.lastName && (
                                <p className="error_msg">Last name cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="contact-form-label">
                            <div className="form-item">
                              <input
                                placeholder="EMAIL ADDRESS" 
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                className="input-name contact-lebel"
                              />
                              {errors?.email && (
                                <p className="error_msg">Email cannot be empty.</p>
                              )}
                            </div>
                            <div className="form-item">
                              <input
                                placeholder="PHONE" 
                                type="tel"
                                name="phone"
                                pattern="[0-9]*"
                                value={phone}
                                onChange={handleChange}
                                className="input-name contact-lebel"
                                maxLength="12"
                              />
                              {errors?.email && (
                                <p className="error_msg">Phone number cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="contact-form-label">
                            <div className="form-item full-width">
                              <textarea
                                name="message"
                                value={message}
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                }}
                                className="form-message contact-lebel" rows="4" cols="50" placeholder="MESSAGE">
                              </textarea>
                              {errors?.message && (
                                <p className="error_msg">Message cannot be empty.</p>
                              )}
                            </div>
                          </div>
                          <div className="submit_btn_wrap">
                            <button type="submit" >Submit</button>
                          </div>
                          <div className="final_msg_wrap">
                            {showSuccessMessage && (
                              <p className="thankyou_msg">
                                Thank you for your message! A team member from Villazzo Realty will get back to you shortly.
                              </p>
                            )}
                            {showFailureMessage && (
                              <p className="error_msg">
                                Please fill the form
                              </p>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>  
                  </div>
              	</div>
			  </div>		  
      </div>
		</div>
    <div className="map_wrap">
      <div dangerouslySetInnerHTML={{ __html: propertysix.attributes.MapIframe }} />
    </div>
      </div>
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    globalRes,
    propertysixRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
	fetchAPI("/propertysix", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      propertysix: propertysixRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default TopDeals