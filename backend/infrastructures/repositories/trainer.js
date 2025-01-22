const { Trainer } = require("../../domain/models/models");

const create_trainer = async (trainer) => {
  trainer = await Trainer.create(trainer);
  return trainer;
};

const get_trainer_by_id = async (id) => {
  const trainer = await Trainer.findById(id);
  return trainer;
};

const get_trainer_by_email = async (email) => {
  const trainer = await Trainer.findOne({ email: email });
  return trainer;
};

const update_trainer = async (id, trainer) => {
  const updated = await Trainer.findByIdAndUpdate(id, trainer, {
    new: true,
  });
  return updated;
};

const delete_trainer = async (id) => {
  const deleted = await Trainer.findByIdAndDelete(id);
  return deleted;
};

const get_training_programs_by_id = async (id) => {
  const trainer = await Trainer.findById(id).populate("trainingProgram");

  return trainer.trainingProgram;
};

const get_all_trainers = async () => {
  const trainers = await Trainer.find().populate({
    path: "employee",
    select: "name email",
  });
  return trainers;
};

const add_training_program = async (trainer_id, program_id) => {
  try {
    // Find the trainer by ID
    const trainer = await Trainer.findById(trainer_id);

    if (!trainer) {
      throw new Error(`Trainer with ID ${trainer_id} not found.`);
    }

    // Initialize trainingProgram array if it doesn't exist
    if (!Array.isArray(trainer.trainingProgram)) {
      trainer.trainingProgram = [];
    }

    // Add the program ID to the array if it doesn't already exist
    if (!trainer.trainingProgram.includes(program_id)) {
      trainer.trainingProgram.push(program_id);
    } else {
      console.log(`Program ID ${program_id} already exists for this trainer.`);
    }

    // Save the trainer document
    await trainer.save();

    console.log(
      `Program ID ${program_id} added successfully to trainer ID ${trainer_id}.`
    );
  } catch (error) {
    console.error(`Error adding training program: ${error.message}`);
  }
};

module.exports = {
  create_trainer,
  get_trainer_by_id,
  get_trainer_by_email,
  update_trainer,
  delete_trainer,
  get_training_programs_by_id,
  get_all_trainers,
  add_training_program,
};
