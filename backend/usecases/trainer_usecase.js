const {
  create_trainer,
  get_trainer_by_id,
  get_trainer_by_email,
  update_trainer,
  delete_trainer,
  get_training_programs_by_id,
  get_all_trainers,
  add_training_program,
} = require("../infrastructures/repositories/trainer");

class TrainerUsecase {
  constructor() {}
  async createTrainer(trainerData) {
    const created = await create_trainer(trainerData);
    if (!created) {
      throw new Error("Failed to create trainer");
    }
    return created;
  }

  async getTrainerById(trainerId) {
    const trainer = await get_trainer_by_id(trainerId);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    return trainer;
  }

  async getTrainerByEmail(email) {
    const trainer = await get_trainer_by_email(email);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    return trainer;
  }

  async updateTrainer(trainerId, trainerData) {
    const updated = await update_trainer(trainerId, trainerData);
    if (!updated) {
      throw new Error("Failed to update trainer");
    }
    return updated;
  }

  async deleteTrainer(trainerId) {
    const deleted = await delete_trainer(trainerId);
    if (!deleted) {
      throw new Error("Failed to delete trainer");
    }
    return deleted;
  }

  async getTraingProgramsById(trainerId) {
    const trainings = await get_training_programs_by_id(trainerId);
    return trainings;
  }

  async getAllTrainers() {
    const trainers = await get_all_trainers();
    return trainers;
  }

  async addTrainingProgram(trainerId, programId) {
    await add_training_program(trainerId, programId);
  }
}

module.exports = TrainerUsecase;
