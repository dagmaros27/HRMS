const {
  getReports,
  getReportById,
  createReport,
} = require("../infrastructures/repositories/report");

class ReportUseCase {
  constructor(gemini) {
    this.gemini = gemini;
  }

  async getReports() {
    return await getReports();
  }

  async getReportById(id) {
    return await getReportById(id);
  }

  async createReport(user_id) {
    const content = this.gemini.generateContent("generate report about apple");

    return await createReport(contet);
  }
}

module.exports = ReportUseCase;
