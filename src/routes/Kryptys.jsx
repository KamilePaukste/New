import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg from "../components/heroimg";
import Directions from "../components/directions";

const Kryptys = () => {
  return (
    <div>
      <Navbar />
      <Heroimg
        heading="Directions"
        text="Looking for an exotic trip? Choose any destination you like; we offer trips to Bali, Madagascar, the Maldives, and the Seychelles."
      />
      <Directions />
      <Footer />
    </div>
  );
};

export default Kryptys;
