import React from "react";
import "./pricing.css";
import maldives1 from "../assets/maldives.jpg";

import bali1 from "../assets/balidirections.jpg";

import madagascar1 from "../assets/madagascar.jpg";

import seychelles1 from "../assets/seychelles.jpg";
import { Link } from "react-router-dom";

const directions = [
  {
    name: "Maldives",
    imgSrcs: [maldives1],
    link: "/Kryptys",
    nights: 7,
    hotelName: "Sunrise Beach Hotel",
    allInclusive: true,
    price: 1500,
  },
  {
    name: "Bali",
    imgSrcs: [bali1],
    link: "/Kryptys",
    nights: 5,
    hotelName: "Ocean View Resort",
    allInclusive: false,
    price: 1200,
  },
  {
    name: "Madagascar",
    imgSrcs: [madagascar1],
    link: "/Kryptys",
    nights: 10,
    hotelName: "Rainforest Retreat",
    allInclusive: true,
    price: 2000,
  },
  {
    name: "Seychelles",
    imgSrcs: [seychelles1],
    link: "/Kryptys",
    nights: 8,
    hotelName: "Paradise Cove",
    allInclusive: false,
    price: 1700,
  },
];

const DirectionCard = ({
  name,
  imgSrcs,
  link,
  nights,
  hotelName,
  allInclusive,
  price,
}) => (
  <div className="direction-card">
    <img src={imgSrcs[0]} alt={`${name} view`} className="direction-img" />
    <div className="direction-info">
      <h2>{name}</h2>
      <p>
        {nights} nights at {hotelName}
      </p>
      <p>{allInclusive ? "All-Inclusive" : "Breakfast Only"}</p>
      <p>Price per person: ${price}</p>
      <Link to={link}>
        <button>Directions</button>
      </Link>
    </div>
  </div>
);

const Pricing = () => (
  <div className="pricing-container">
    {directions.map((direction) => (
      <DirectionCard key={direction.name} {...direction} />
    ))}
  </div>
);

export default Pricing;
