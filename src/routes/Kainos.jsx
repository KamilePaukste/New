import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg from "../components/heroimg";
import Pricing from "../components/kainos";

const Kainos = () => {
  return (
    <div>
      <Navbar />
      <Heroimg
        heading="Travel Prices"
        text="The price depends on the destination, hotel, and the number of nights you want to stay."
      />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Kainos;
