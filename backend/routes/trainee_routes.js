const express = require("express");
const router = express.Router();
const AsyncHandler = require("express-async-handler");
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

router.post("/register", AsyncHandler(createTrainee));
router.get("/:id", AsyncHandler(getTraineeById));
router.put("/:id", AsyncHandler(updateTrainee));

module.exports = router;
