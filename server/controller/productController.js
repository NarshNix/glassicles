const Product = require("../model/Product");
const User = require("../model/User");

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

const addToCart = async (req, res) => {
  const { uId, pId } = req.params;

  try {
    const user = await User.findById(uId);
    const product = await Product.findById(pId);

    if (!user) {
      return res.status(400).send(`${uId}, please log in`);
    }

    if (!product) {
      return res.status(400).send("No Product to be added");
    }

    const cartItem = user.cart.find((item) => item.id.toString() === pId);

    if (cartItem) {
      cartItem.quantity += 1;
      await user.save();
      await user.populate("cart.id");
      return res.status(200).json({
        user: user.cart,
        message: "Item quantity updated",
      });
    } else {
      user.cart.push({ id: pId, quantity: 1 });
      await user.save();
      await user.populate("cart.id");
      return res.status(200).json({
        user: user.cart,
        message: "Item added to cart",
      });
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const getCart = async (req, res) => {
  try {
    const { uId } = req.params;

    const user = await User.findById(uId);

    if (!user) {
      return res.send("No user wiith this id");
    }

    const cart = user.cart;
    await user.populate("cart.id");
    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const removeProduct = async (req, res) => {
  const { uId, pId } = req.params;
  try {
    const user = await User.findById(uId);

    if (!user) {
      res.status(200).send("Not allowed to do this");
      return;
    }

    const product = await Product.findById(pId);
    if (!product) {
      res.status(200).send("No product to be deleted");
      return;
    }

    user.cart = user.cart.filter((item) => item.id != pId);
    await user.populate("cart.id");
    await user.save();

    return res
      .status(200)
      .send({ remainingProduct: user.cart, message: "deleted" });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = { getProduct, addToCart, getCart, removeProduct };
