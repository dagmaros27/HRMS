const { ApplicantUsecase } = require("../usecases/usecases");
const generateToken = require("../infrastructures/utils/generate_token");

const applicantUsecase = new ApplicantUsecase();

const createApplicant = async (req, res) => {
  const applicantData = req.body;
  console.log(applicantData);
  const applicant = await applicantUsecase.createApplicant(applicantData);
  applicant.role = "APPLICANT";

  const token = generateToken(applicant._id, applicant.role);

  res.status(200).send({
    token: token,
    user_id: applicant._id,
    user_name: applicant.username,
    user_email: applicant.email,
    user_role: applicant.role,
  });
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

const deleteApplicant = async (req, res) => {
  const applicantId = req.params.id;
  const applicant = await applicantUsecase.deleteApplicant(applicantId);
  res.status(200).json(applicant);
};

const updateApplicant = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const applicantData = req.body;

    // If a file is uploaded, include the file path in the applicant data
    if (req.file) {
      applicantData.resume = req.file.path; // Adjust path handling as needed
    }

    // Use the use case to update the applicant
    const updatedApplicant = await applicantUsecase.updateApplicant(
      applicantId,
      applicantData
    );

    // Respond with the updated applicant data
    res.status(200).json(updatedApplicant);
  } catch (error) {
    // Handle errors gracefully
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApplicant,
  getApplicantById,
  getApplicantByEmail,
  updateApplicant,
  deleteApplicant,
};
