const mongoose = require("mongoose");

const Product = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Product", Product);
