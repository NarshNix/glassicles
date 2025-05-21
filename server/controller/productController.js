const Product = require("../model/Product");

const getProduct = async (req, res) => {
  const product = await Product.find();
  try {
    if (!product) {
      res.status(400).send({ message: "No products to show" });
    }

    res.send({ product });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getProduct };
