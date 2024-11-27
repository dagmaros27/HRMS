const mongoose = require("mongoose");
const { Schema } = mongoose;

// Employee Model
const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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

employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };
