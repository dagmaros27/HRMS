const { AdminUsecase } = require("../usecases/usecases");

const adminUsecase = new AdminUsecase();

const createAdmin = async (req, res) => {
  const adminData = req.body;
  if (!adminData.username || !adminData.password || !adminData.email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const admin = await adminUsecase.createAdmin(adminData);
  res.status(201).json(admin);
};

const getAdminById = async (req, res) => {
  const adminId = req.params.id;
  if (!adminId) {
    return res.status(400).json({ error: "Missing admin ID" });
  }
  const admin = await adminUsecase.getAdminById(adminId);
  res.status(200).json(admin);
};

const getAdminByUsername = async (req, res) => {
  const username = req.params.username;
  if (!username) {
    return res.status(400).json({ error: "Missing username" });
  }
  const admin = await adminUsecase.getAdminByUsername(username);
  res.status(200).json(admin);
};

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;
  const adminData = req.body;
  if (!adminId) {
    return res.status(400).json({ error: "Missing admin ID" });
  }
  const admin = await adminUsecase.updateAdmin(adminId, adminData);
  res.status(200).json(admin);
};

const deleteAdmin = async (req, res) => {
  const adminId = req.params.id;
  if (!adminId) {
    return res.status(400).json({ error: "Missing admin ID" });
  }
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
