const { Report, Employee } = require("../../domain/models/models");

const getReports = async () => {
  const reports = await Report.find();
  return await Report.find().populate({
    path: "createdBy",
    select: "name",
  });
};

const getReportById = async (id) => {
  return await Report.findById(id).populate({
    path: "createdBy",
    select: "name",
  });
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
