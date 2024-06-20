import "./Navbarstyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>
          Travel guide <IoEarthOutline />
        </h1>
      </Link>
      <ul class={click ? "navmenu active" : "navmenu"}>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/Kainos">Prices</Link>
        </li>
        <li>
          <Link to="/Kryptys">Directions</Link>
        </li>
        <li>
          <Link to="/Susisiekite">Contact Us</Link>
        </li>
      </ul>
      <div className="hamburgermenu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
