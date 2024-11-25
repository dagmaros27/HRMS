const { JobApplication } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_job_application = AsyncHandler(async (application) => {
  application = await JobApplication.create(application);
  return application;
});

const get_job_application_by_id = AsyncHandler(async (id) => {
  const application = await JobApplication.findById(id);
  return application;
});

module.exports = {
  create_job_application,
  get_job_application_by_id,
};
