const express = require("express");
const router = express.Router();

const {
  createTrainee,
  getTraineeById,
  updateTrainee,
} = require("../controllers/trainee_controller");

router.post("/", createTrainee);
router.get("/:id", getTraineeById);
router.put("/:id", updateTrainee);

module.exports = router;
