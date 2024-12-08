const { TrainingProgram } = require("../../domain/models/models");

const create_training_program = async (trainingProgram) => {
  trainingProgram = await TrainingProgram.create(trainingProgram);
  return trainingProgram;
};

const update_training_program = async (trainingProgram) => {
  trainingProgram = await TrainingProgram.findByIdAndUpdate(
    trainingProgram._id,
    trainingProgram,
    {
      new: true,
    }
  );
  return trainingProgram;
};

const get_training_program_by_id = async (id) => {
  const trainingProgram = await TrainingProgram.findById(id);
  return trainingProgram;
};

const get_all_training_programs = async () => {
  const trainingPrograms = await TrainingProgram.find();
  return trainingPrograms;
};

module.exports = {
  create_training_program,
  update_training_program,
  get_training_program_by_id,
  get_all_training_programs,
};
