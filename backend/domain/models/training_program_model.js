const mongoose = require("mongoose");
const { Schema } = mongoose;

// Training Program Model
const trainingProgramSchema = new Schema(
  {
    trainee: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    trainer: { type: Schema.Types.ObjectId, ref: "Trainer" },
  },
  { timestamps: true }
);

const TrainingProgram = mongoose.model(
  "TrainingProgram",
  trainingProgramSchema
);

module.exports = { TrainingProgram };
