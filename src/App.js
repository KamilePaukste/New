import React from "react";
import "./index.css";
import Apiemus from "./routes/Apiemus";
import Kainos from "./routes/Kainos";
import Kryptys from "./routes/Kryptys";
import Susisiekite from "./routes/Susisiekite";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Apiemus />} />
        <Route path="/Kainos" element={<Kainos />} />
        <Route path="/Kryptys" element={<Kryptys />} />
        <Route path="/Susisiekite" element={<Susisiekite />} />
      </Routes>
    </>
  );
}

export default App;
