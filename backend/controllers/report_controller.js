const { ReportUsecase } = require("../usecases/usecases");
const Gemini = require("../infrastructures/llm/gemini");

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
    const markdownContent = await reportUsecase.getReportById(req.params.id);

    const pdfBuffer = await convertMarkdownToPDF(markdownContent);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="content.pdf"`);
    res.status(200).send(pdfBuffer);
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
