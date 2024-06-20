import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg from "../components/heroimg";

const Kainos = () => {
  return (
    <div>
      <Navbar />
      <Heroimg
        heading="Travel Prices"
        text="The price depends on the destination, hotel, and the number of nights you want to stay."
      />
      <Footer />
    </div>
  );
};

export default Kainos;
