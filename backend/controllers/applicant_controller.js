const { ApplicantUsecase } = require("../usecases/usecases");

const applicantUsecase = new ApplicantUsecase();

const createApplicant = async (req, res) => {
  const applicantData = req.body;
  const applicant = await applicantUsecase.createApplicant(applicantData);
  res.status(201).json(applicant);
};

const getApplicantById = async (req, res) => {
  const applicantId = req.params.id;
  const applicant = await applicantUsecase.getApplicantById(applicantId);
  res.status(200).json(applicant);
};

const getApplicantByEmail = async (req, res) => {
  const email = req.params.email;
  const applicant = await applicantUsecase.getApplicantByEmail(email);
  res.status(200).json(applicant);
};

const updateApplicant = async (req, res) => {
  const applicantId = req.params.id;
  const applicantData = req.body;
  const applicant = await applicantUsecase.updateApplicant(
    applicantId,
    applicantData
  );
  res.status(200).json(applicant);
};

const deleteApplicant = async (req, res) => {
  const applicantId = req.params.id;
  const applicant = await applicantUsecase.deleteApplicant(applicantId);
  res.status(200).json(applicant);
};

module.exports = {
  createApplicant,
  getApplicantById,
  getApplicantByEmail,
  updateApplicant,
  deleteApplicant,
};
