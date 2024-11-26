const { JobApplication } = require("../domain/models/models");

const create_job_application = async (application) => {
  application = await JobApplication.create(application);
  return application;
};

const get_job_application_by_id = async (id) => {
  const application = await JobApplication.findById(id);
  return application;
};

const get_job_applications_by_vacancy = async (vacancyId) => {
  const applications = await JobApplication.find({ jobVacancy: vacancyId });
  return applications;
};

module.exports = {
  create_job_application,
  get_job_application_by_id,
  get_job_applications_by_vacancy,
};
