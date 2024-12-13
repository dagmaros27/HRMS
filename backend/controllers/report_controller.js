const { ReportUsecase } = require("../usecases/usecases");
const Gemini = require("../infrastructures/llm/gemini");

const gemini = new Gemini();
const reportUsecase = new ReportUsecase(gemini);

const getReports = async (req, res) => {
  const reports = await reportUsecase.getReports();
  res.status(200).json(reports);
};

const getReportById = async (req, res) => {
  const report = await reportUsecase.getReportById(req.params.id);
  res.status(200).json(report);
};

const createReport = async (req, res) => {
  const report = await reportUsecase.createReport(req.user.id);
  res.status(201).json(report);
};

module.exports = {
  getReports,
  getReportById,
  createReport,
};
