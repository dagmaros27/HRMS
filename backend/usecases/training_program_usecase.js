const {
  create_training_program,
  update_training_program,
  get_training_program_by_id,
  get_all_training_programs,
} = require("../repositories/training_program");

class TrainingProgramUsecase {
  async createTrainingProgram(trainingProgramData) {
    return await create_training_program(trainingProgramData);
  }

  async updateTrainingProgram(trainingProgramData) {
    return await update_training_program(trainingProgramData);
  }

  async getTrainingProgramById(id) {
    return await get_training_program_by_id(id);
  }

  async getAllTrainingPrograms() {
    return await get_all_training_programs();
  }
}

module.exports = TrainingProgramUsecase;
