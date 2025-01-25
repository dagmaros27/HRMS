const { JobVacancyUsecase } = require("../usecases/usecases");

const jobVacancyUsecase = new JobVacancyUsecase();

const createJobVacancy = async (req, res) => {
  const jobVacancyData = req.body;
  jobVacancyData.createdBy = req.user._id;
  const jobVacancy = await jobVacancyUsecase.createJobVacancy(jobVacancyData);
  res.status(201).json(jobVacancy);
};

const getAllJobs = async (req, res) => {
  try {
    let jobs = await jobVacancyUsecase.getAllJobs();

    console.log("User role:", req.user.role);
    console.log("User applied jobs:", req.user.appliedJobs);
    if (req.user.role === "APPLICANT") {
      const appliedJobIds = req.user.appliedJobs || [];
      jobs = jobs.filter((job) => !appliedJobIds.includes(job._id));
    }

    console.log("Jobs:", jobs);

    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.id;
  const job = await jobVacancyUsecase.getJobById(jobId);
  res.status(200).json(job);
};

const updateJob = async (req, res) => {
  const jobId = req.params.id;
  const jobData = req.body;
  const job = await jobVacancyUsecase.updateJob(jobId, jobData);
  res.status(200).json(job);
};

const deleteJob = async (req, res) => {
  const jobId = req.params.id;
  const job = await jobVacancyUsecase.deleteJob(jobId);
  res.status(200).json(job);
};

module.exports = {
  createJobVacancy,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};
