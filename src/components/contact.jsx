import "./contact.css";
import React from "react";

function Contact() {
  return (
    <div className="form">
      <form>
        <h2>Contact us!</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label htmlFor="phone">Phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="^\+370\d{8}$"
          title="Phone number must be in the format +370XXXXXXXX"
          placeholder="+370XXXXXXXX"
        ></input>
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Type Your Message Here"
          required
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
