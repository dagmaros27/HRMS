const mongoose = require("mongoose");
const { Schema } = mongoose;

// Employee Model
const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    position: { type: String, required: true },
    employmentHistory: [
      {
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    qualifications: [{ type: String }], // list of qualifications
    certifications: [{ type: String }], // list of certifications
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };
