import "./contact.css";
import React from "react";

function Contact() {
  return (
    <div className="form">
      <form>
        <h2>Contact us!</h2>
        <label>Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Phone number:</label>
        <input type="number"></input>
        <label>Your message:</label>
        <textarea rows="5" placeholder="Type Your Message Here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
