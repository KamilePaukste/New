import "./directions.css";
import React, { useState } from "react";
import maldives1 from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import bali1 from "../assets/balidirections.jpg";
import bali2 from "../assets/bali2.jpg";
import madagascar1 from "../assets/madagascar.jpg";
import madagascar2 from "../assets/madagascar2.jpg";
import seychelles1 from "../assets/seychelles.jpg";
import seychelles2 from "../assets/seychelles2.jpg";
import { Link } from "react-router-dom";

const DirectionCard = ({
  name,
  imgSrcs,
  link,
  nights,
  hotelName,
  allInclusive,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const handleImageClick = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % imgSrcs.length);
  };

  return (
    <div className="directionsCard">
      <h2 className="directionName">{name}</h2>
      <img
        src={imgSrcs[currentImg]}
        alt={`${name} island`}
        onClick={handleImageClick}
        className="directionImage"
      />
      <div className="details">
        <p>Number of Nights: {nights}</p>
        <p>Hotel: {hotelName}</p>
        <p>All Inclusive: {allInclusive ? "Yes" : "No"}</p>
        <Link to={link}>
          <button>Price</button>
        </Link>
      </div>
    </div>
  );
};

const Directions = () => {
  return (
    <div className="directions">
      <h1>Choose your next trip</h1>
      <div className="directionsContainer">
        <DirectionCard
          name="Maldives"
          imgSrcs={[maldives1, maldives2]}
          link="/Kainos"
          nights={7}
          hotelName="Sunrise Beach Hotel"
          allInclusive={true}
        />
        <DirectionCard
          name="Bali"
          imgSrcs={[bali1, bali2]}
          link="/Kainos"
          nights={5}
          hotelName="Ocean View Resort"
          allInclusive={false}
        />
        <DirectionCard
          name="Madagascar"
          imgSrcs={[madagascar1, madagascar2]}
          link="/Kainos"
          nights={10}
          hotelName="Rainforest Retreat"
          allInclusive={true}
        />
        <DirectionCard
          name="Seychelles"
          imgSrcs={[seychelles1, seychelles2]}
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
