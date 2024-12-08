const { login } = require("../controllers/auth_controller");
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.post("/login", asyncHandler(login));

module.exports = router;
