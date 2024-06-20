import "./directions.css";
import React from "react";
import maldives from "../assets/maldives.jpg";

const Directions = () => {
  return (
    <div className="directions">
      <h1>Choose your next trip</h1>
      <div className="directionsContainer">
        <div className="directionsCard">
          <h2 className="directionName">Maldives</h2>
          <img src={maldives} alt="maldives island" />
          <div>
            <p>Details</p>
            <button Link to="/Kainos">
              Price
            </button>
          </div>
        </div>
        <div className="directionsCard">
          <h2 className="directionName">Maldives</h2>
          <img src={maldives} alt="maldives island" />
          <div>
            <p>Details</p>
            <button Link to="/Kainos">
              Price
            </button>
          </div>
        </div>
        <div className="directionsCard">
          <h2 className="directionName">Maldives</h2>
          <img src={maldives} alt="maldives island" />
          <div>
            <p>Details</p>
            <button Link to="/Kainos">
              Price
            </button>
          </div>
        </div>
        <div className="directionsCard">
          <h2 className="directionName">Maldives</h2>
          <img src={maldives} alt="maldives island" />
          <div>
            <p>Details</p>
            <button Link to="/Kainos">
              Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
