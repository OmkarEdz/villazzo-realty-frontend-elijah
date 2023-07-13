import React, { useState, useEffect } from "react"
import NextImage from "./image"
import axios from 'axios';

const PropertyCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/properties'); // Replace with the actual endpoint for your collection
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <>
      <div className="property-wrap property-list-wrap">
        {properties.map((property) => (
        <div className="property-box">
            <p className="img_Wrap">
              <NextImage image={property.attributes.image} />
            </p>
            <h4 className="pro-name">{property.attributes.location}</h4>
            <div className="pro-text">{property.attributes.Content}</div>
        </div>
        ))}
      </div>
    </>
  )
}

export default PropertyCard
