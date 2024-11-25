const { HRManager } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_hrmanager = AsyncHandler(async (manager) => {
  manager = await HRManager.create(manager);
  return manager;
});

const get_hrmanager_by_id = AsyncHandler(async (id) => {
  const manager = await HRManager.findById(id);
  return manager;
});

const get_hrmanager_by_email = AsyncHandler(async (email) => {
  const manager = await HRManager.findOne({ email: email });
  return manager;
});

module.exports = {
  create_hrmanager,
  get_hrmanager_by_id,
  get_hrmanager_by_email,
};
