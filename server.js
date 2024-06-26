const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const directions = [
  {
    name: "Maldives",
    link: "/Kryptys",
    nights: 7,
    hotelName: "Sunrise Beach Hotel",
    allInclusive: true,
    price: 1500,
  },
  {
    name: "Bali",
    link: "/Kryptys",
    nights: 5,
    hotelName: "Ocean View Resort",
    allInclusive: false,
    price: 1200,
  },
  {
    name: "Madagascar",
    link: "/Kryptys",
    nights: 10,
    hotelName: "Rainforest Retreat",
    allInclusive: true,
    price: 2000,
  },
  {
    name: "Seychelles",
    link: "/Kryptys",
    nights: 8,
    hotelName: "Paradise Cove",
    allInclusive: false,
    price: 1700,
  },
];

app.get("/api/directions", (req, res) => {
  res.json(directions);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

