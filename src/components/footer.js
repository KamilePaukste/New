import "./footer.css";
import React from "react";
import { FaPhone, FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="contactInfo">
          <h3>CONTACT US:</h3>
          <div>
            <FaPhone /> Phone number: +370 1111111
          </div>
          <div>
            <MdAlternateEmail /> Email: info@travelguide.com
          </div>
          <div>
            <IoLocation /> Address: K. Donelaičio g. 62, V. Putvinskio g. 53,
            44248 Kaunas
          </div>
        </div>
        <div className="socialMedia">
          <h3>FOLLOW US:</h3>
          <div>
            <a href="https://www.instagram.com/">
              <FaInstagram /> Instagram
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <FaFacebook /> Facebook
            </a>
          </div>
          <div>
            <a href="https://www.pinterest.com/">
              <FaPinterest /> Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
