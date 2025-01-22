const mongoose = require("mongoose");
const { Schema } = mongoose;

// Trainer Model
const trainerSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    trainingProgram: [
      {
        type: Schema.Types.ObjectId,
        ref: "TrainingProgram",
      },
    ],
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = { Trainer };
