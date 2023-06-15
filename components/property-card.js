import React from "react"
import Image from "next/image"
import axios from 'axios';
import NextImage from "./image"

const PropertyCard = ({ articles }) => {
    // const propertiesData = properties;
    // const leftArticlesCount = Math.ceil(articles.length / 5)
    // const leftArticles = articles.slice(0, leftArticlesCount)
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
 
  return (
    <>
      <div className="property-wrap property-list-wrap">
      <div>
          {/*{leftArticles.map((article, i) => {
            return (
               <Card article={article} key={`article__left__${article.attributes.slug}`}/> 
            )
          })}*/}
        </div>
        {/* <div>{ properties.attributes.location }</div> */}
        {/* {propertiesData.map((property, index) => (
        <div className="property-box" key={index}>
            <p className="img_Wrap">
                <Image
                    loader={myLoader}
                    src
                    alt="Image"
                    layout="fill"
                />
                <NextImage image={property.attributes.image} />
            </p>
            <h4 class="pro-name">{property.attributes.location}</h4>
            <div className="pro-text">{property.attributes.Content}</div>
        </div>
        ))} */}
      </div>
    </>
  )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const propertiesRes = await Promise.all([
      fetchAPI("/properties", { populate: "*" }),
    ])
  
    return {
      props: {
        properties: propertiesRes.data,
      },
      revalidate: 1,
    }
}
  
export default PropertyCard
