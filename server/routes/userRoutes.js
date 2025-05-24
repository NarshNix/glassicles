const express = require("express");

const { makeUser, logUser } = require("../controller/userController");
const router = express.Router();

router.post("/signup", makeUser);
router.post("/login", logUser);

module.exports = router;
