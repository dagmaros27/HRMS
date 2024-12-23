const express = require("express");
const router = express.Router();
const AsyncHandler = require("express-async-handler");
const {
  applyForJob,
  getJobApplicationById,
  getJobApplicationsByVacancy,
  getAllJobApplications,
} = require("../controllers/job_application_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["ADMIN", "APPLICANT"]));

router.post("/apply", AsyncHandler(applyForJob));
router.get("/:id", AsyncHandler(getJobApplicationById));
router.get("/vacancy/:vacancyId", AsyncHandler(getJobApplicationsByVacancy));
router.get("/", AsyncHandler(getAllJobApplications));

module.exports = router;
