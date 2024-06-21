import "./directions.css";
import React from "react";
import maldives from "../assets/maldives.jpg";
import { Link } from "react-router-dom";

const DirectionCard = ({ name, imgSrc, link }) => (
  <div className="directionsCard">
    <h2 className="directionName">{name}</h2>
    <img src={imgSrc} alt={`${name} island`} />
    <div>
      <p>Details</p>
      <Link to={link}>
        <button>Price</button>
      </Link>
    </div>
  </div>
);

const Directions = () => {
  return (
    <div className="directions">
      <h1>Choose your next trip</h1>
      <div className="directionsContainer">
        <DirectionCard name="Maldives" imgSrc={maldives} link="/Kainos" />
        <DirectionCard name="Bali" imgSrc={maldives} link="/Kainos" />
        <DirectionCard name="Madagascar" imgSrc={maldives} link="/Kainos" />
        <DirectionCard name="Seychelles" imgSrc={maldives} link="/Kainos" />
      </div>
    </div>
  );
};

export default Directions;
