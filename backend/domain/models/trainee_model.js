const mongoose = require("mongoose");
const { Schema } = mongoose;

// Trainee Model (to keep track of training program participation)
const traineeSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    trainingProgram: {
      type: Schema.Types.ObjectId,
      ref: "TrainingProgram",
      required: true,
    },
    status: {
      type: String,
      enum: ["enrolled", "completed", "dropped"],
      default: "enrolled",
    },
  },
  { timestamps: true }
);

const Trainee = mongoose.model("Trainee", traineeSchema);

module.exports = { Trainee };
