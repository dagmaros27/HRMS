const mongoose = require("mongoose");
const { Schema } = mongoose;

// Applicant Model
const applicantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    resume: { type: String }, // URL to the resume file
    appliedJobs: [{ type: Schema.Types.ObjectId, ref: "JobApplication" }],
  },
  { timestamps: true }
);

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = { Applicant };
