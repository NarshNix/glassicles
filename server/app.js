const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({ origin: ["https://glassicles.onrender.com"], credentials: true })
);

app.use("/product", productRoutes);
app.use("/users", userRoutes);
app.use("/api/payment", require("./routes/paymentRoutes"));

mongoose.connect(
  "mongodb+srv://harshfn0207:abogn8vHcWam4ZN1@glassicles.61u15jk.mongodb.net/data"
);

app.listen(5000, () => console.log("Connected to the server!!!!"));
