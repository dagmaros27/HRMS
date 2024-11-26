const {
  create_job_application,
  get_job_application_by_id,
  get_job_applications_by_vacancy,
} = require("../repositories/job_application");

class JobApplicationUsecase {
  async applyForJob(jobApplicationData) {
    return await create_job_application(jobApplicationData);
  }

  async getJobApplicationById(jobApplicationId) {
    return await get_job_application_by_id(jobApplicationId);
  }

  async getJobApplicationsByVacancy(vacancyId) {
    return await get_job_applications_by_vacancy(vacancyId);
  }
}

module.exports = JobApplicationUsecase;
