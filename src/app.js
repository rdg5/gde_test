const express = require("express");
const path = require("path");
const { calculateDiscount } = require("./discount");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// db
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(product);
});

app.post("/products/:id/discount", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Not found" });
  }
  const { percent } = req.body;
  try {
    const newPrice = calculateDiscount(product.price, percent);
    product.price = newPrice;
    return res.json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = { app, products };