const express = require("express");
const router = express.Router();

const {
  createNews,
  getAllNews,
  getNewsById,
} = require("../controllers/news_controller");

router.post("/", createNews);
router.get("/", getAllNews);
router.get("/:id", getNewsById);

module.exports = router;
