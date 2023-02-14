import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Script from 'next/script'

const Details = ({
  global,
  homepage,
  footerData,
  navigation,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  // const MBB = {seo : "false",data:{ acid : "qwXQVWE" } };
  // function mbbMapLoaded(){ MBB.googleMaps = true; };
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
          <Image
            loader={myLoader}
            src={getStrapiMedia(homepage.attributes.headerImage)}
            className="header_image"
            layout="fill"
            alt="Villazzo"
          />
        </div>
        <Header navigation={navigation} global={global} />
        <div id="searchPage" className="page_layout">
            <div id="MBBv3_SearchDetails"></div>
        </div>
      </div>
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps(props) {
  // Run API calls in parallel
  const [
    globalRes,
    homepageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
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

export default Details
