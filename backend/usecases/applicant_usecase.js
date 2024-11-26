const ApplicantRepo = require("../repositories/applicant_repo");

class ApplicantUsecase {
  async createApplicant(applicantData) {
    return await ApplicantRepo.createApplicant(applicantData);
  }

  async getApplicantById(applicantId) {
    return await ApplicantRepo.getApplicantById(applicantId);
  }

  async getApplicantByEmail(email) {
    return await get_applicant_by_email(email);
  }

  async updateApplicant(applicantId, applicantData) {
    return await update_applicant(applicantId, applicantData);
  }

  async deleteApplicant(applicantId) {
    return await delete_applicant(applicantId);
  }
}

module.exports = ApplicantUsecase;
