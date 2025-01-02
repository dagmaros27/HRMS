const express = require("express");
const router = express.Router();

const {
  createApplicant,
  getApplicantById,
  getApplicantByEmail,
  updateApplicant,
  deleteApplicant,
} = require("../controllers/applicant_controller");
const AsyncHandler = require("express-async-handler");

const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

//router.use(accessMiddleware(["ADMIN"]));

router.post("/register", AsyncHandler(createApplicant));
router.get("/:id", authMiddleware, AsyncHandler(getApplicantById));
router.put("/:id", authMiddleware, AsyncHandler(updateApplicant));
router.delete("/:id", authMiddleware, AsyncHandler(deleteApplicant));

module.exports = router;
