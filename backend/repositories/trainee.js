const { Trainee } = require("../domain/models/models");

const create_trainee = async (trainee) => {
  trainee = await Trainee.create(trainee);
  return trainee;
};

const update_trainee = async (trainee) => {
  trainee = await Trainee.findByIdAndUpdate(trainee._id, trainee, {
    new: true,
  });
  return trainee;
};

const get_trainee_by_id = async (id) => {
  const trainee = await Trainee.findById(id);
  return trainee;
};

module.exports = {
  create_trainee,
  update_trainee,
  get_trainee_by_id,
};
