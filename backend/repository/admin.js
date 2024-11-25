const { Admin } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_admin = AsyncHandler(async (admin) => {
  admin = await Admin.create(admin);
  return admin;
});

const get_admin_by_id = AsyncHandler(async (id) => {
  const admin = await Admin.findById(id);
  return admin;
});

const get_admin_by_username = AsyncHandler(async (name) => {
  const admin = await Admin.findOne({ username: name });
  return admin;
});

module.exports = {
  create_admin,
  get_admin_by_id,
  get_admin_by_username,
};
