const { HRManager } = require("../domain/models/models");

const create_hr_manager = async (manager) => {
  manager = await HRManager.create(manager);
  return manager;
};

const get_hr_manager_by_id = async (id) => {
  const manager = await HRManager.findById(id);
  return manager;
};

const get_hr_manager_by_email = async (email) => {
  const manager = await HRManager.findOne({ email: email });
  return manager;
};

const update_hr_manager = async (id, manager) => {
  const updated = await HRManager.findByIdAndUpdate(id, manager, {
    new: true,
  });
  return updated;
};

const delete_hr_manager = async (id) => {
  const deleted = await HRManager.findByIdAndDelete(id);
  return deleted;
};

module.exports = {
  create_hr_manager,
  get_hr_manager_by_id,
  get_hr_manager_by_email,
  update_hr_manager,
  delete_hr_manager,
};
