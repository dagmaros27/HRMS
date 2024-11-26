const { Applicant } = require("../domain/models/models");

const create_applicant = async (applicant) => {
  applicant = await Applicant.create(applicant);
  return applicant;
};

const get_applicant_by_id = async (id) => {
  const applicant = await Applicant.findById(id);
  return applicant;
};

const get_applicant_by_email = async (email) => {
  const applicant = await Applicant.findOne({ email: email });
  return applicant;
};

const update_applicant = async (id, applicant) => {
  const updatedApplicant = await Applicant.findByIdAndUpdate(id, applicant, {
    new: true,
  });
  return updatedApplicant;
};

const delete_applicant = async (id) => {
  await Applicant.findByIdAndDelete(id);
};

module.exports = {
  create_applicant,
  get_applicant_by_id,
  get_applicant_by_email,
  update_applicant,
  delete_applicant,
};
