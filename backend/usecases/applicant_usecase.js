const {
  create_applicant,
  get_applicant_by_id,
  get_applicant_by_email,
  update_applicant,
  delete_applicant,
} = require("../repositories/applicant");

class ApplicantUsecase {
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
    const updated = await update_applicant(applicantId, applicantData);
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
}

module.exports = ApplicantUsecase;
