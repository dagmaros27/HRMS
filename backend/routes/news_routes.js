const express = require("express");
const router = express.Router();
const upload = require("../infrastructures/utils/file_upload");
const asyncHandler = require("express-async-handler");
const {
  createNews,
  getAllNews,
  getNewsById,
} = require("../controllers/news_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
// router.use(accessMiddleware(["HR_MANAGER", "ADMIN"]));

router.post(
  "/",
  asyncHandler(upload.single("image")),
  asyncHandler(createNews)
);
router.get("/", getAllNews);
router.get("/:id", getNewsById);

module.exports = router;
