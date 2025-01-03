const mongoose = require("mongoose");
const { Schema } = mongoose;

const AttendanceSchema = new mongoose.Schema({
  employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ["Present", "Absent", "Late"],
    default: "Present",
  },
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = { Attendance };
