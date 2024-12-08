const { HrManagerUsecase } = require("../usecases/usecases");

const hrManagerUsecase = new HrManagerUsecase();

const createHrManager = async (req, res) => {
  const hrManagerData = req.body;
  const hrManager = await hrManagerUsecase.createHrManager(hrManagerData);
  res.status(201).json(hrManager);
};

const getHrManagerById = async (req, res) => {
  const hrManagerId = req.params.id;
  const hrManager = await hrManagerUsecase.getHrManagerById(hrManagerId);
  res.status(200).json(hrManager);
};

const getHrManagerByEmail = async (req, res) => {
  const email = req.params.email;
  const hrManager = await hrManagerUsecase.getHrManagerByEmail(email);
  res.status(200).json(hrManager);
};

const getAllHrManagers = async (req, res) => {
  const hrManagers = await hrManagerUsecase.getAllHrManagers();
  res.status(200).json(hrManagers);
};

const updateHrManager = async (req, res) => {
  const hrManagerId = req.params.id;
  const hrManagerData = req.body;
  const hrManager = await hrManagerUsecase.updateHrManager(
    hrManagerId,
    hrManagerData
  );
  res.status(200).json(hrManager);
};

const deleteHrManager = async (req, res) => {
  const hrManagerId = req.params.id;
  const hrManager = await hrManagerUsecase.deleteHrManager(hrManagerId);
  res.status(200).json(hrManager);
};

module.exports = {
  createHrManager,
  getHrManagerById,
  getHrManagerByEmail,
  getAllHrManagers,
  updateHrManager,
  deleteHrManager,
};
