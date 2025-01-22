const { JobApplication } = require("../../domain/models/models");

const create_job_application = async (application) => {
  application = await JobApplication.create(application);
  return application;
};

const get_job_application_by_id = async (id) => {
  try {
    const applications = await JobApplication.findById(id).populate({
      path: "applicant",
      select: "-password -__v",
    });

    return applications;
  } catch (error) {
    console.error("Error fetching job applications:", error.message);
    throw new Error("Failed to retrieve job applications");
  }
};

const get_job_applications_by_vacancy = async (vacancyId) => {
  try {
    const applications = await JobApplication.find({
      jobVacancy: vacancyId,
    }).populate({
      path: "applicant",
      select: "-password -__v",
    });

    return applications;
  } catch (error) {
    console.error("Error fetching job applications:", error.message);
    throw new Error("Failed to retrieve job applications");
  }
};

const get_all_job_applications = async () => {
  const applications = await JobApplication.find();
  return applications;
};

module.exports = {
  create_job_application,
  get_job_application_by_id,
  get_job_applications_by_vacancy,
  get_all_job_applications,
};
