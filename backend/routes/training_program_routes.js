const express = require("express");
const router = express.Router();

const {
  createTrainingProgram,
  getAllTrainingPrograms,
  getTrainingProgramById,
  updateTrainingProgram,
} = require("../controllers/training_program_controller");

router.post("/", createTrainingProgram);
router.get("/", getAllTrainingPrograms);
router.get("/:id", getTrainingProgramById);
router.put("/:id", updateTrainingProgram);

module.exports = router;
