const express = require("express");
const router = express.Router();

const {
  createTrainingProgram,
  getAllTrainingPrograms,
  getTrainingProgramById,
  updateTrainingProgram,
} = require("../controllers/training_program_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["EMPLOYEE", "ADMIN"]));

router.post("/", createTrainingProgram);
router.get("/", getAllTrainingPrograms);
router.get("/:id", getTrainingProgramById);
router.put("/:id", updateTrainingProgram);

module.exports = router;
