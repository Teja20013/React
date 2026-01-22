const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/products", (req, res) => {
  res.json({
    veg: [
      { id: 1, name: "Tomato", price: 40, image: "/images/tomato.png" },
      { id: 2, name: "Potato", price: 30, image: "/images/potato.png" }
    ],
    nonveg: [
      { id: 3, name: "Chicken", price: 220, image: "/images/chicken.png" }
    ],
    milk: [
      { id: 4, name: "Milk Packet", price: 50, image: "/images/milk.png" }
    ]
  });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: " " });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
