const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_whDYJPc1YTAV31",
  key_secret: "mXzflnVHms2zKEwlYauUHKVm",
});

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // amount in paise
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Payment order creation failed", err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { createOrder };
