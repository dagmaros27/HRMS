const mongoose = require("mongoose");
const { Schema } = mongoose;

// HR Manager Model
const hrManagerSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    department: { type: String, required: true },
  },
  { timestamps: true }
);

const HRManager = mongoose.model("HRManager", hrManagerSchema);

module.exports = { HRManager };
