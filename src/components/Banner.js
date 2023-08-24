import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";
import '../components/Banner.css'

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner">
        <div className="banner-2">
          <h1 className="banner-heading">
            <span className="banner-span">Rent</span> Your Dream House With Us.
          </h1>
          <p className="banner-paragraph">
            Occaecat sint veniam minim irure eiusmod. Laborum mollit commodo
            sunt commodo duis cupidatat sint esse incididunt eu dolor ipsum ad.
            Laborum esse cillum tempor amet Lorem Lorem.
            </p>
        </div>
        <div className="banner-image">
          <img src={Image} alt=""/>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
