const express = require("express");
const router = express.Router();

const {
  getProduct,
  addToCart,
  getCart,
} = require("../controller/productController");

router.get("/", getProduct);
router.post("/cart/:pId/:uId", addToCart);
router.get("/cart/:uId", getCart);
module.exports = router;
