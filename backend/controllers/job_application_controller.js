const { JobApplicationUsecase } = require("../usecases/usecases");

const jobApplicationUsecase = new JobApplicationUsecase();

const applyForJob = async (req, res) => {
  const jobApplicationData = req.body;
  const jobApplication = await jobApplicationUsecase.applyForJob(
    jobApplicationData
  );
  res.status(201).json(jobApplication);
};

const getJobApplicationById = async (req, res) => {
  const jobApplicationId = req.params.id;
  const jobApplication = await jobApplicationUsecase.getJobApplicationById(
    jobApplicationId
  );
  res.status(200).json(jobApplication);
};

const getJobApplicationsByVacancy = async (req, res) => {
  const vacancyId = req.params.vacancyId;
  const jobApplications =
    await jobApplicationUsecase.getJobApplicationsByVacancy(vacancyId);
  res.status(200).json(jobApplications);
};

const getAllJobApplications = async (req, res) => {
  const jobApplications = await jobApplicationUsecase.getAllJobApplications();
  res.status(200).json(jobApplications);
};

module.exports = {
  applyForJob,
  getJobApplicationById,
  getJobApplicationsByVacancy,
  getAllJobApplications,
};
