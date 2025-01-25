const {
  create_applicant,
  get_applicant_by_id,
  get_applicant_by_email,
  update_applicant,
  delete_applicant,
} = require("../infrastructures/repositories/applicant");

class ApplicantUsecase {
  constructor() {}
  async createApplicant(applicantData) {
    const created = await create_applicant(applicantData);
    if (!created) {
      throw new Error("Failed to create applicant");
    }
    return created;
  }

  async getApplicantById(applicantId) {
    const applicant = await get_applicant_by_id(applicantId);
    if (!applicant) {
      throw new Error("Applicant not found");
    }
    return applicant;
  }

  async getApplicantByEmail(email) {
    const applicant = await get_applicant_by_email(email);
    if (!applicant) {
      throw new Error("Applicant not found");
    }
    return applicant;
  }

  async updateApplicant(applicantId, applicantData) {
    const updated = await update_applicant(applicantData);
    if (!updated) {
      throw new Error("Failed to update applicant");
    }
    return updated;
  }

  async deleteApplicant(applicantId) {
    const deleted = await delete_applicant(applicantId);
    if (!deleted) {
      throw new Error("Failed to delete applicant");
    }
    return deleted;
  }

  async addJobApplication(applicantId, jobApplicationId) {
    const applicant = await get_applicant_by_id(applicantId);
    if (!applicant.appliedJobs) {
      applicant.appliedJobs = [];
    }
    applicant.appliedJobs.push(jobApplicationId);
    console.log(applicant, jobApplicationId);
    const updated = await update_applicant(applicant);
    return updated;
  }
}

module.exports = ApplicantUsecase;
