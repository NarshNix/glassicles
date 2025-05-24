const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 0 },
    },
  ],
  wishlist: [{ id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } }],
});

module.exports = mongoose.model("User", UserSchema);
