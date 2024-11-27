const express = require("express");
const router = express.Router();

const {
  createJobVacancy,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} = require("../controllers/job_vacancy_controller");

router.post("/", createJobVacancy);
router.delete("/:id", deleteJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);

module.exports = router;
