const AdminUsecase = require("../usecases/admin_usecase");

const adminUsecase = new AdminUsecase();

const createAdmin = async (req, res) => {
  const adminData = req.body;
  const admin = await adminUsecase.createAdmin(adminData);
  res.status(201).json(admin);
};

const getAdminById = async (req, res) => {
  const adminId = req.params.id;
  const admin = await adminUsecase.getAdminById(adminId);
  res.status(200).json(admin);
};

const getAdminByUsername = async (req, res) => {
  const username = req.params.username;
  const admin = await adminUsecase.getAdminByUsername(username);
  res.status(200).json(admin);
};

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;
  const adminData = req.body;
  const admin = await adminUsecase.updateAdmin(adminId, adminData);
  res.status(200).json(admin);
};

const deleteAdmin = async (req, res) => {
  const adminId = req.params.id;
  await adminUsecase.deleteAdmin(adminId);
  res.status(204).send();
};

module.exports = {
  createAdmin,
  getAdminById,
  getAdminByUsername,
  updateAdmin,
  deleteAdmin,
};
