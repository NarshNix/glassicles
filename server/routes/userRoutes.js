const express = require("express");

const { makeUser } = require("../controller/userController");
const router = express.Router();

router.post("/signup", makeUser);

module.exports = router;
