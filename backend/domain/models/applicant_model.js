const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

// Applicant Model
const applicantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    resume: { type: String }, // URL to the resume file
    appliedJobs: [{ type: Schema.Types.ObjectId, ref: "JobApplication" }],
  },
  { timestamps: true }
);

applicantSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = { Applicant };
