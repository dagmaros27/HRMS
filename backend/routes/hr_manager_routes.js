const express = require("express");
const router = express.Router();

const {
  createHrManager,
  deleteHrManager,
  getAllHrManagers,
  updateHrManager,
  getHrManagerById,
} = require("../controllers/hr_manager_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["ADMIN"]));

router.post("/", createHrManager);
router.get("/:id", getHrManagerById);
router.get("/", getAllHrManagers);
router.put("/:id", updateHrManager);
router.delete("/:id", deleteHrManager);

module.exports = router;
