const { Applicant } = require("../../domain/models/models");

const create_applicant = async (applicant) => {
  const createdApplicant = await Applicant.create(applicant);
  const { password, ...applicantWithoutPassword } = createdApplicant.toObject();
  return applicantWithoutPassword;
};

const get_applicant_by_id = async (id) => {
  const applicant = await Applicant.findById(id);
  return applicant;
};

const get_applicant_by_email = async (email) => {
  const applicant = await Applicant.findOne({ email: email });
  return applicant;
};

const update_applicant = async (applicant) => {
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(applicant._id, {
      new: true,
    });
    console.log(updatedApplicant);
    return updatedApplicant.toObject();
  } catch (error) {
    console.error(`Error updating applicant with id ${id}:`, error);
    throw error;
  }
};

const delete_applicant = async (id) => {
  const deletedApplicant = await Applicant.findByIdAndDelete(id);
  const { password, ...applicantWithoutPassword } = deletedApplicant.toObject();
  return applicantWithoutPassword;
};

module.exports = {
  create_applicant,
  get_applicant_by_id,
  get_applicant_by_email,
  update_applicant,
  delete_applicant,
};
