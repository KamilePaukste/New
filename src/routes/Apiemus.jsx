import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Directions from "../components/directions";
import Contact from "../components/contact";
import Checklist from "../components/Checklist";

const Apiemus = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Directions />
      <Checklist />
      <Contact />
      <Footer />
    </div>
  );
};

export default Apiemus;
