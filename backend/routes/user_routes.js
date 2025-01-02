const {
  getUserByEmail,
  getUserProfile,
} = require("../controllers/user_controller");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../infrastructures/middlewares/auth");

router.get("/:email", getUserByEmail);
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
