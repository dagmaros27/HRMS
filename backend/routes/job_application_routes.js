const express = require("express");
const router = express.Router();

const {
  applyForJob,
  getJobApplicationById,
  getJobApplicationsByVacancy,
  getAllJobApplications,
} = require("../controllers/job_application_controller");

router.post("/apply", applyForJob);
router.get("/:id", getJobApplicationById);
router.get("/vacancy/:vacancyId", getJobApplicationsByVacancy);
router.get("/", getAllJobApplications);

module.exports = router;
