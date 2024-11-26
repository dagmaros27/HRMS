const {
  create_training_program,
  update_training_program,
  get_training_program_by_id,
  get_all_training_programs,
} = require("../repositories/training_program");

class TrainingProgramUsecase {
  async createTrainingProgram(trainingProgramData) {
    const created = await create_training_program(trainingProgramData);
    if (!created) {
      throw new Error("Failed to create training program");
    }
    return created;
  }

  async updateTrainingProgram(trainingProgramData) {
    const updated = await update_training_program(trainingProgramData);
    if (!updated) {
      throw new Error("Failed to update training program");
    }
    return updated;
  }

  async getTrainingProgramById(id) {
    const trainingProgram = await get_training_program_by_id(id);
    if (!trainingProgram) {
      throw new Error("Training program not found");
    }
    return trainingProgram;
  }

  async getAllTrainingPrograms() {
    const trainingPrograms = await get_all_training_programs();
    if (!trainingPrograms) {
      throw new Error("Failed to get all training programs");
    }
    return trainingPrograms;
  }
}

module.exports = TrainingProgramUsecase;
