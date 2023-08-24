import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import "./House.css";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;

  return (
    <div className="house-design">
      <img className="house-image" src={image} alt="" />
      <div className="house-first-div">
        <div className="house-type">{type}</div>
        <div className="house-country">{country}</div>
      </div>
      <div className="house-address">{address}</div>
      <div className="house-div">
            <div className="house-bed">
            <div className="house-icon">
                {" "}
                <BiBed />
            </div>
            <div>{bedrooms}</div>
            </div>

            <div className="house-bed">
            <div className="house-icon">
                {" "}
                <BiBath />
            </div>
            <div>{bathrooms}</div>
            </div>

            <div className="house-bed">
            <div className="house-icon">
                {" "}
                <BiArea />
            </div>
            <div>{surface}</div>
            </div>
      </div>
      <div className="house-price">{price}</div>
    </div>
  );
};

export default House;
