const express = require("express");
const router = express.Router();
const {
  get_all_trainers,
  get_trainer_by_id,
  get_trainering_programs_by_id,
} = require("../controllers/trainer_controller");

const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);

router.get("/", get_all_trainers);
router.get("/:id", get_trainer_by_id);
router.get("/:id/programs", get_trainering_programs_by_id);

module.exports = router;
