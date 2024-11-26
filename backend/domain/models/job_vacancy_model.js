const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobVacancySchema = new Schema(
  {
    jobTitle: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "HRManager",
      required: true,
    },
    applicants: [{ type: Schema.Types.ObjectId, ref: "Applicant" }],
  },
  { timestamps: true }
);

const JobVacancy = mongoose.model("JobVacancy", jobVacancySchema);

module.exports = { JobVacancy };
