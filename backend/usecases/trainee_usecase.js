const {
  create_trainee,
  update_trainee,
  get_trainee_by_id,
} = require("../repositories/trainee");

class TraineeUsecase {
  async createTrainee(traineeData) {
    return await create_trainee(traineeData);
  }

  async updateTrainee(traineeData) {
    return await update_trainee(traineeData);
  }

  async getTraineeById(id) {
    return await get_trainee_by_id(id);
  }
}

module.exports = TraineeUsecase;
