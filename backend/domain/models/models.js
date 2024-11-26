const { Admin } = require("./admin_model");
const { Employee } = require("./employee_model");
const { HRManager } = require("./hr_manager_model");
const { Applicant } = require("./applicant_model");
const { JobApplication } = require("./job_application_model");
const { LeaveRequest } = require("./leave_request_model");
const { TrainingProgram } = require("./training_program_model");
const { Trainee } = require("./trainee_model");
const { News } = require("./news_model");
const { JobVacancy } = require("./job_vacancy_model");
module.exports = {
  Admin,
  Employee,
  HRManager,
  Applicant,
  JobApplication,
  JobVacancy,
  LeaveRequest,
  TrainingProgram,
  Trainee,
  News,
};
