const express = require("express");
const router = express.Router();

const {
  getProduct,
  addToCart,
  getCart,
  removeProduct,
} = require("../controller/productController");

router.get("/", getProduct);
router.post("/cart/:pId/:uId", addToCart);
router.get("/cart/:uId", getCart);
router.delete("/cart/:uId/:pId", removeProduct);
module.exports = router;
