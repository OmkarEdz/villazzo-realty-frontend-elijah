import App from "next/app"
import Head from "next/head"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.css"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Script from 'next/script'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        <Script src="https://www.mbb2.com/version3/css/theme/acid/qwXQVWE"></Script>
        <Script src="https://maps.googleapis.com/maps/api/js?callback=mbbMapLoaded&libraries=places&key=AIzaSyBjUILCWnup4zgs3JZJF6gysN4KAK5FwTQ"></Script>
        <Script src="https://d2w6u17ngtanmy.cloudfront.net/scripts/my-buying-buddy.5.0.js.gz"></Script>
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: "*"
  })
  // Pass the data to our page via props
  return { props: {...appProps, pageProps: { global: globalRes.data } }}
}

export default MyApp
