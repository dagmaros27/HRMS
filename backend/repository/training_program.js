const { TrainingProgram } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_training_program = AsyncHandler(async (trainingProgram) => {
  trainingProgram = await TrainingProgram.create(trainingProgram);
  return trainingProgram;
});

module.exports = {
  create_training_program,
};
