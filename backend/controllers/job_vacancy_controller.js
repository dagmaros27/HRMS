const { JobVacancyUsecase } = require("../usecases/usecases");

const jobVacancyUsecase = new JobVacancyUsecase();

const createJobVacancy = async (req, res) => {
  const jobVacancyData = req.body;
  const jobVacancy = await jobVacancyUsecase.createJobVacancy(jobVacancyData);
  res.status(201).json(jobVacancy);
};

const getAllJobs = async (req, res) => {
  const jobs = await jobVacancyUsecase.getAllJobs();
  res.status(200).json(jobs);
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
