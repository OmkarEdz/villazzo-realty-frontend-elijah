import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Script from 'next/script'
import { Range } from "react-range"
import Link from "next/link"
import { useRouter } from 'next/router'

const Buy = ({ global, homepage, footerData, navigation }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  const router = useRouter()
  let defaultState = { values: [100] }
  let [state, setState] = useState(defaultState)
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("8")
  const currencyFormat = (num)=> {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <>
      <Script src="https://www.mbb2.com/version3/css/theme/acid/qwXQVWE"></Script>
      <Script id="my-script">
        {`
          const MBB = {seo : "false",data:{ acid : "qwXQVWE" } };
          function mbbMapLoaded(){ MBB.googleMaps = true; }
        `}
      </Script>
      <Script src="https://maps.googleapis.com/maps/api/js?callback=mbbMapLoaded&libraries=places&key=AIzaSyBjUILCWnup4zgs3JZJF6gysN4KAK5FwTQ"></Script>
      <Script src="https://d2w6u17ngtanmy.cloudfront.net/scripts/my-buying-buddy.5.0.js.gz"></Script>
      <div className="bg-img">
        <div className="homepage-image">
          <div className="blankDiv"></div>
          <video loop muted autoPlay={"autoplay"}>
              <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${global.attributes.videoURL}`} type="video/mp4" />
              <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${global.attributes.videoURL}`} type="video/webm" />
          </video>
        </div> 
        <Header navigation={navigation} global={global} />
        <div className="buttons-wrap">
          <div className="sell-search-container buy">
            <div className="selltxt">
              <h3 className="propertytxt">THE PERFECT HOME FOR YOU</h3>
              <p>Villazzo is here to help acquire your dream home or condo. We have helped many clients successfully secure their new residence in South Florida. Let us do the same for you.</p>
            </div>
            <div className="buy-search-box">
              <form id="Form-1">
                <input type="hidden" name="mls_id" value="fl133" />
                <div className="row">
                  <div className="col-md-4">
                    <label className="">LOCATION</label>
                    <input type="text" name="area_search" placeholder="City, Region" aria-label="City, Region" className="bfg-input-field bfg-input-area-field form-control" />
		                <input type="hidden" name="city" className="bfg-input-area-city" />
                    <input type="hidden" name="sub_area" className="bfg-input-area-sub_area" />
		                <input type="hidden" name="zip_code" className="bfg-input-area-zip_code" />
                  </div>
                  <div className="col-md-3 prop_type">
                    <label className="">PROPERTY TYPE</label>
                    <select
                      className="form-control"
                      placeholder="PROPERTY TYPE"
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="8">Commercial</option>
                      <option value="2">Condo/Townhouse/Co-Op</option>
                      <option value="4">Farms/Ranch</option>
                      <option value="9">Lot/Land/Acreage</option>
                      <option value="3">Mobile/Manufactured</option>
                      <option value="6">Multi Family</option>
                      <option value="5">Rental Properties</option>
                      <option value="7">Residential Income</option>
                      <option value="7">Single Family</option>
                      <option value="10">Vacation/Time-Share</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="">PRICE RANGE</label>
                    <Range
                      step={100}
                      initial={100}
                      min={100}
                      max={250000000}
                      values={state.values}
                      onChange={(values) => setState({ values })}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "4px",
                            width: "100%",
                            marginTop: "15px",
                            backgroundColor: "#f7dd80",
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "15px",
                            width: "15px",
                            borderRadius: "25px",
                            backgroundColor: "#fff",
                            borderColor: "#f7dd80",
                            borderStyle: "solid",
                            borderWidth: "4px",
                          }}
                        />
                      )}
                    />
                    <output style={{ marginTop: "5px", float:"right" }} id="output">
                      {currencyFormat(state.values[0])}
                    </output>
                  </div>
                  <div className="col-md-2 search-icon-box">
                  {/* <input name="submit" type="button" onClick="MBBv3_SubmitCustomSearchForm('Form-1','http://www.charliesmithrealty.com/results');" value="Search!"  /> */}
                  <input name="submit" type="button" onClick={()=> MBBv3_SubmitCustomSearchForm('Form-1','https://www.villazzorealty.com/results')} value="Search!"  />
                  </div>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [globalRes, homepageRes, footerRes, navigationRes] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      homepage: homepageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Buy
