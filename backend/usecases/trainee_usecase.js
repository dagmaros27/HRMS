const {
  create_trainee,
  update_trainee,
  get_trainee_by_id,
} = require("../repositories/trainee");

class TraineeUsecase {
  async createTrainee(traineeData) {
    const created = await create_trainee(traineeData);
    if (!created) {
      throw new Error("Failed to create trainee");
    }
    return created;
  }

  async updateTrainee(traineeData) {
    const updated = await update_trainee(traineeData);
    if (!updated) {
      throw new Error("Failed to update trainee");
    }
    return updated;
  }

  async getTraineeById(id) {
    const trainee = await get_trainee_by_id(id);
    if (!trainee) {
      throw new Error("Trainee not found");
    }
    return trainee;
  }
}

module.exports = TraineeUsecase;
