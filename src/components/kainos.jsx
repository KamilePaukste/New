import React, { useEffect, useState } from "react";
import "./pricing.css";
import { Link } from "react-router-dom";

const DirectionCard = ({
  name,
  link,
  nights,
  hotelName,
  allInclusive,
  price,
}) => (
  <div className="direction-card">
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

const Pricing = () => {
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/directions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setDirections(data))
      .catch((error) => console.error("Error fetching directions:", error));
  }, []);

  return (
    <div className="pricing-container">
      {directions.map((direction) => (
        <DirectionCard key={direction.name} {...direction} />
      ))}
    </div>
  );
};

export default Pricing;
