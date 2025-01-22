const {
  getUserByEmail,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user_controller");
const express = require("express");
const router = express.Router();
const upload = require("../infrastructures/utils/file_upload");
const authMiddleware = require("../infrastructures/middlewares/auth");
const asyncHandler = require("express-async-handler");

router.post("/profile", authMiddleware, asyncHandler(getUserProfile));
router.get("/:email", asyncHandler(getUserByEmail));
router.put(
  "/profile",
  authMiddleware,
  asyncHandler(upload.single("resume")),
  asyncHandler(updateUserProfile)
);
module.exports = router;
