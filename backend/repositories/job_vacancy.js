const { JobVacancy } = require("../domain/models/models");

const create_job = async (job) => {
  job = await JobVacancy.create(job);
  return job;
};

const update_job = async (job) => {
  job = await JobVacancy.findByIdAndUpdate(job._id, job, { new: true });
  return job;
};

const delete_job = async (id) => {
  await JobVacancy.findByIdAndDelete(id);
};

const get_job_by_id = async (id) => {
  const job = await JobVacancy.findById(id);
  return job;
};

const get_all_jobs = async () => {
  const jobs = await JobVacancy.find();
  return jobs;
};

module.exports = {
  create_job,
  update_job,
  delete_job,
  get_job_by_id,
  get_all_jobs,
};
