const express = require("express");
const router = express.Router();

const {
  createTrainee,
  getTraineeById,
  updateTrainee,
} = require("../controllers/trainee_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["ADMIN"]));

router.post("/", createTrainee);
router.get("/:id", getTraineeById);
router.put("/:id", updateTrainee);

module.exports = router;
