const { ReportUsecase } = require("../usecases/usecases");
const Gemini = require("../infrastructures/llm/gemini");
const {
  convertMarkdownToPDF,
} = require("../infrastructures/utils/generate_pdf");

const gemini = new Gemini();
const reportUsecase = new ReportUsecase(gemini);

const getReports = async (req, res) => {
  const reports = await reportUsecase.getReports();
  console.log(reports);
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

const downloadPdf = async (req, res) => {
  try {
    const report = await reportUsecase.getReportById(req.params.id);

    const pdfBuffer = await convertMarkdownToPDF(report.content);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="Report ${report.createdAt.toDateString()}.pdf"`
    );
    res.status(200).end(pdfBuffer);
  } catch (error) {
    res.status(500).json({ message: "Error generating PDF" });
  }
};

module.exports = {
  getReports,
  getReportById,
  createReport,
  downloadPdf,
};
