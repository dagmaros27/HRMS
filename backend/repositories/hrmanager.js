const { HRManager } = require("../domain/models/models");

const create_hrmanager = async (manager) => {
  manager = await HRManager.create(manager);
  return manager;
};

const get_hrmanager_by_id = async (id) => {
  const manager = await HRManager.findById(id);
  return manager;
};

const get_hrmanager_by_email = async (email) => {
  const manager = await HRManager.findOne({ email: email });
  return manager;
};

module.exports = {
  create_hrmanager,
  get_hrmanager_by_id,
  get_hrmanager_by_email,
};
