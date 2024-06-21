import "./directions.css";
import React from "react";
import maldives from "../assets/maldives.jpg";
import bali from "../assets/balidirections.jpg";
import madagascar from "../assets/madagascar.jpg";
import seychelles from "../assets/seychelles.jpg";
import { Link } from "react-router-dom";

const DirectionCard = ({
  name,
  imgSrc,
  link,
  nights,
  hotelName,
  allInclusive,
}) => (
  <div className="directionsCard">
    <h2 className="directionName">{name}</h2>
    <img src={imgSrc} alt={`${name} island`} />
    <div className="details">
      <div>
        <p>Number of Nights: {nights}</p>
      </div>
      <div>
        <p>Hotel: {hotelName}</p>
      </div>
      <div>
        <p>All Inclusive: {allInclusive ? "Yes" : "No"}</p>
      </div>
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
        <DirectionCard
          name="Maldives"
          imgSrc={maldives}
          link="/Kainos"
          nights={7}
          hotelName="Sunrise Beach Hotel"
          allInclusive={true}
        />
        <DirectionCard
          name="Bali"
          imgSrc={bali}
          link="/Kainos"
          nights={5}
          hotelName="Ocean View Resort"
          allInclusive={false}
        />
        <DirectionCard
          name="Madagascar"
          imgSrc={madagascar}
          link="/Kainos"
          nights={10}
          hotelName="Rainforest Retreat"
          allInclusive={true}
        />
        <DirectionCard
          name="Seychelles"
          imgSrc={seychelles}
          link="/Kainos"
          nights={8}
          hotelName="Paradise Cove"
          allInclusive={false}
        />
      </div>
    </div>
  );
};

export default Directions;
