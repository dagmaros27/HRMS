const express = require("express");
const router = express.Router();

const {
  createApplicant,
  getApplicantById,
  getApplicantByEmail,
  updateApplicant,
  deleteApplicant,
} = require("../controllers/applicant_controller");

const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["ADMIN"]));

router.post("/", createApplicant);
router.get("/:id", getApplicantById);
router.put("/:id", updateApplicant);
router.delete("/:id", deleteApplicant);

module.exports = router;
