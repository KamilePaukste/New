import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg from "../components/heroimg";
import Contact from "../components/contact";

const Susisiekite = () => {
  return (
    <div>
      <Navbar />
      <Heroimg
        heading="Contact Us!"
        text="Have questions or need assistance planning your trip? Reach out to our friendly customer service team via phone, email, or our online contact form."
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Susisiekite;
