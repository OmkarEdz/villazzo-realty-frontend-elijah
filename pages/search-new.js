import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Script from 'next/script'

const SearchNew = ({ global, homepage, footerData, navigation }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  const MBB = { mbbUrl: 'https://www.mbb2.com/version3', seo : 'false' };
  MBB.data = { acid : 'qwXQVWE' };
  return (
    <>
    <Script src='https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBjUILCWnup4zgs3JZJF6gysN4KAK5FwTQ' />
    <Script src='https://www.mbb2.com/version3/css/theme/acid/qwXQVWE' />
    <Script src='https://d2w6u17ngtanmy.cloudfront.net/scripts/my-buying-buddy.5.0.js.gz' />
      <div className="bg-img">
        <div className="homepage-image">
          <div className="blankDiv"></div>
          <video loop muted autoPlay={"autoplay"}>
              <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${global.attributes.videoURL}`} type="video/mp4" />
              <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${global.attributes.videoURL}`} type="video/webm" />
          </video>
        </div> 
        <Header navigation={navigation} global={global} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <div className="buttons-wrap">
          <div className="sell-search-container buy">
            <div className="selltxt">
              <h3 className="propertytxt">THE PERFECT HOME FOR YOU</h3>
              <p>Villazzo is here to help acquire your dream home or condo. We have helped many clients successfully secure their new residence in South Florida. Let us do the same for you.</p>
            </div>
            <div className="marginTopSearchNew"><div id="MBBv3_SearchForm"></div></div>
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

export default SearchNew
