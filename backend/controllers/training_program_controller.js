const {
  TrainingProgramUsecase,
  TrainerUsecase,
} = require("../usecases/usecases");

const trainingProgramUsecase = new TrainingProgramUsecase();
const trainerUsecase = new TrainerUsecase();

const createTrainingProgram = async (req, res) => {
  const trainingProgramData = req.body;
  const trainingProgram = await trainingProgramUsecase.createTrainingProgram(
    trainingProgramData
  );
  const trainerId = trainingProgramData.trainer;
  await trainerUsecase.addTrainingProgram(trainerId, trainingProgram._id);
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
  if (req.user.role === "TRAINER") {
    const trainingPrograms = await trainerUsecase.getTraingProgramsById(
      req.user._id
    );
    return res.status(200).json(trainingPrograms);
  }
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
