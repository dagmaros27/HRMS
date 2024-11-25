const { Job } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_job = AsyncHandler(async (job) => {
  job = await Job.create(job);
  return job;
});

const update_job = AsyncHandler(async (job) => {
  job = await Job.findByIdAndUpdate(job._id, job, { new: true });
  return job;
});

const delete_job = AsyncHandler(async (id) => {
  await Job.findByIdAndDelete(id);
});

const get_job_by_id = AsyncHandler(async (id) => {
  const job = await Job.findById(id);
  return job;
});

module.exports = {
  create_job,
  update_job,
  delete_job,
  get_job_by_id,
};
