const express = require("express");
const router = express.Router();

const {
  createJobVacancy,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJob,
} = require("../controllers/job_vacancy_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["HR_MANAGER"]));

router.post("/", createJobVacancy);
router.delete("/:id", deleteJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);

module.exports = router;
