const { TrainerUsecase } = require("../usecases/usecases");

const trainerUsecase = new TrainerUsecase();

const get_all_trainers = async (req, res) => {
  try {
    const trainers = await trainerUsecase.getAllTrainers();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const get_trainer_by_id = async (req, res) => {
  try {
    const trainer = await trainerUsecase.getTrainerById(req.params.id);
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const get_trainering_programs_by_id = async (req, res) => {
  try {
    const programs = await trainerUsecase.getTraingProgramsById(req.params.id);
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get_all_trainers,
  get_trainer_by_id,
  get_trainering_programs_by_id,
};
