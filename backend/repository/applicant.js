const { Applicant } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_applicant = AsyncHandler(async (applicant) => {
  applicant = await Applicant.create(applicant);
  return applicant;
});

const get_applicant_by_id = AsyncHandler(async (id) => {
  const applicant = await Applicant.findById(id);
  return applicant;
});

const get_applicant_by_email = AsyncHandler(async (email) => {
  const applicant = await Applicant.findOne({ email: email });
  return applicant;
});
