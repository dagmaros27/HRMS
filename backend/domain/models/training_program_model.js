const mongoose = require("mongoose");
const { Schema } = mongoose;

// Training Program Model
const trainingProgramSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    trainers: { type: String },
    participants: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
  },
  { timestamps: true }
);

const TrainingProgram = mongoose.model(
  "TrainingProgram",
  trainingProgramSchema
);

module.exports = { TrainingProgram };
