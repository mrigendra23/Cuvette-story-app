const express = require("express");
const createAUser = require("../Controllers/Register");
const router = express.Router();

router.post("/", createAUser);

module.exports = router;
