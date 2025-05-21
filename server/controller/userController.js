const mongoose = require("mongoose");
const User = require("../model/User");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const makeUser = async (req, res) => {
  const { name, password, cnfrmPassword, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== cnfrmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const protectPassword = await bcrypt.hash(password, 12);

    const userMade = new User({
      name,
      password: protectPassword,
      email,
    });

    await userMade.save();

    const token = jwt.sign(
      { id: userMade._id, email: userMade.email },
      "Nadnutogether",
      { expiresIn: "1h" }
    );

    res.status(200).json({ user: userMade, token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { makeUser };
