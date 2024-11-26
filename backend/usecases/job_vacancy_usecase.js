const {
  create_job,
  get_all_jobs,
  get_job_by_id,
  update_job,
  delete_job,
} = require("../repositories/job_vacancy");

class JobVacancyUsecase {
  async createJobVacancy(jobVacancyData) {
    return await create_job(jobVacancyData);
  }

  async getAllJobs() {
    return await get_all_jobs();
  }

  async getJobById(jobId) {
    return await get_job_by_id(jobId);
  }

  async updateJob(jobId, jobData) {
    return await update_job(jobId, jobData);
  }

  async deleteJob(jobId) {
    return await delete_job(jobId);
  }
}

module.exports = JobVacancyUsecase;
