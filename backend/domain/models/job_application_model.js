const mongoose = require("mongoose");
const { Schema } = mongoose;

// Job Application Model
const jobApplicationSchema = new Schema(
  {
    applicant: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
      required: true,
    },
    jobTitle: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    appliedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = { JobApplication };
