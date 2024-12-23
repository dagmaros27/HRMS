const { Report } = require("../../domain/models/models");

const getReports = async () => {
  return await Report.find();
};

const getReportById = async (id) => {
  return await Report.findById(id);
};

const createReport = async (content, user_id) => {
  const report = {
    createdBy: user_id,
    content,
  };
  return await Report.create(report);
};

module.exports = {
  getReports,
  getReportById,
  createReport,
};
