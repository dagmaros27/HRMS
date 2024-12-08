const {
  TrainingProgramUsecase,
} = require("../usecases/training_program_usecase");

const trainingProgramUsecase = new TrainingProgramUsecase();

const createTrainingProgram = async (req, res) => {
  const trainingProgramData = req.body;
  const trainingProgram = await trainingProgramUsecase.createTrainingProgram(
    trainingProgramData
  );
  res.status(201).json(trainingProgram);
};

const updateTrainingProgram = async (req, res) => {
  const trainingProgramData = req.body;
  const trainingProgram = await trainingProgramUsecase.updateTrainingProgram(
    trainingProgramData
  );
  res.status(200).json(trainingProgram);
};

const getTrainingProgramById = async (req, res) => {
  const trainingProgramId = req.params.id;
  const trainingProgram = await trainingProgramUsecase.getTrainingProgramById(
    trainingProgramId
  );
  res.status(200).json(trainingProgram);
};

const getAllTrainingPrograms = async (req, res) => {
  const trainingPrograms =
    await trainingProgramUsecase.getAllTrainingPrograms();
  res.status(200).json(trainingPrograms);
};

module.exports = {
  createTrainingProgram,
  updateTrainingProgram,
  getTrainingProgramById,
  getAllTrainingPrograms,
};
