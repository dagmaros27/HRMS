const {
  create_job,
  get_all_jobs,
  get_job_by_id,
  update_job,
  delete_job,
} = require("../repositories/job_vacancy");

class JobVacancyUsecase {
  constructor() {}
  async createJobVacancy(jobVacancyData) {
    const created = await create_job(jobVacancyData);
    if (!created) {
      throw new Error("Failed to create job vacancy");
    }
    return created;
  }

  async getAllJobs() {
    const jobs = await get_all_jobs();
    if (!jobs) {
      throw new Error("Failed to get all jobs");
    }
    return jobs;
  }

  async getJobById(jobId) {
    const job = await get_job_by_id(jobId);
    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  }

  async updateJob(jobId, jobData) {
    const updated = await update_job(jobId, jobData);
    if (!updated) {
      throw new Error("Failed to update job");
    }
    return updated;
  }

  async deleteJob(jobId) {
    const deleted = await delete_job(jobId);
    if (!deleted) {
      throw new Error("Failed to delete job");
    }
    return deleted;
  }
}

module.exports = JobVacancyUsecase;
