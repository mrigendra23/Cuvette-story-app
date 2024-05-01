const express = require("express");
const getAllUsers = require("../Controllers/User");
const router = express.Router();

router.post("/", getAllUsers);

module.exports = router;
