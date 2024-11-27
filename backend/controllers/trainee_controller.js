const TraineeUsecase = require("../usecases/trainee_usecase");

const traineeUsecase = new TraineeUsecase();

const createTrainee = async (req, res) => {
  const traineeData = req.body;
  const trainee = await traineeUsecase.createTrainee(traineeData);
  res.status(201).json(trainee);
};

const updateTrainee = async (req, res) => {
  const traineeData = req.body;
  const trainee = await traineeUsecase.updateTrainee(traineeData);
  res.status(200).json(trainee);
};

const getTraineeById = async (req, res) => {
  const traineeId = req.params.id;
  const trainee = await traineeUsecase.getTraineeById(traineeId);
  res.status(200).json(trainee);
};

module.exports = {
  createTrainee,
  updateTrainee,
  getTraineeById,
};
