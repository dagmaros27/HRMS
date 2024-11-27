const { Admin } = require("../domain/models/models");

const create_admin = async (admin) => {
  admin = await Admin.create(admin);
  const { password, ...adminWithoutPassword } = admin.toObject();
  return adminWithoutPassword;
};

const get_admin_by_id = async (id) => {
  const admin = await Admin.findById(id);
  return admin;
};

const get_admin_by_email = async (email) => {
  const admin = await Admin.findOne({ email: email });
  return admin;
};

const update_admin = async (id, admin) => {
  const updatedAdmin = await Admin.findByIdAndUpdate(id, admin, { new: true });
  const { password, ...adminWithoutPassword } = updatedAdmin.toObject();
  return adminWithoutPassword;
};

const delete_admin = async (id) => {
  const deletedAdmin = await Admin.findByIdAndDelete(id);
  const { password, ...adminWithoutPassword } = deletedAdmin.toObject();
  return adminWithoutPassword;
};

module.exports = {
  create_admin,
  get_admin_by_id,
  get_admin_by_email,
  update_admin,
  delete_admin,
};
