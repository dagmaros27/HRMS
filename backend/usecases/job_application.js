const {
  create_job_application,
  get_job_application_by_id,
  get_job_applications_by_vacancy,
} = require("../repositories/job_application");

class JobApplicationUsecase {
  async applyForJob(jobApplicationData) {
    const created = await create_job_application(jobApplicationData);
    if (!created) {
      throw new Error("Failed to apply for job");
    }
    return created;
  }

  async getJobApplicationById(jobApplicationId) {
    const jobApplication = await get_job_application_by_id(jobApplicationId);
    if (!jobApplication) {
      throw new Error("Job application not found");
    }
    return jobApplication;
  }

  async getJobApplicationsByVacancy(vacancyId) {
    const jobApplications = await get_job_applications_by_vacancy(vacancyId);
    if (!jobApplications) {
      throw new Error("Failed to get job applications by vacancy");
    }
    return jobApplications;
  }
}

module.exports = JobApplicationUsecase;
