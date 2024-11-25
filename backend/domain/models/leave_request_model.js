const mongoose = require("mongoose");
const { Schema } = mongoose;

// Leave Request Model
const leaveRequestSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);

module.exports = { LeaveRequest };
