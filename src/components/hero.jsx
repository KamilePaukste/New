import "./herostyle.css";
import React from "react";
import bali from "../assets/bali.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="bali">
        <img className="firstimage" src={bali} alt="sea with mountains" />
      </div>
      <div className="content">
        <h2>IT'S TIME TO</h2>
        <h3>VISIT THE WORLD</h3>
        <p>
          Crave new adventures, mystical experiences and relaxinkg beaches? You
          need to travel. We make sure that you'll get an experience you'll
          never forget.
        </p>
        <div Link to="/Kryptys" className="button">
          DIRECTIONS
        </div>
      </div>
    </div>
  );
};

export default Hero;
