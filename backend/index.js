const connectDB = require("./bootstrap/db");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const adminRoutes = require("./routes/admin_routes");
const authRoutes = require("./routes/auth_routes");
const applicantRoutes = require("./routes/applicant_routes");
const employeeRoutes = require("./routes/employee_routes");
const leaveRequestRoutes = require("./routes/leave_request_routes");
const hrManagerRoutes = require("./routes/hr_manager_routes");
const jobApplicationRoutes = require("./routes/job_application_routes");
const jobVacancyRoutes = require("./routes/job_vacancy_routes");
const newsRoutes = require("./routes/news_routes");
const trainingRoutes = require("./routes/training_program_routes");
const traineeRoutes = require("./routes/trainee_routes");
const reportRoutes = require("./routes/report_routes");
const userRoutes = require("./routes/user_routes");
const attendanceRoutes = require("./routes/attendance_routes");
const TrainerRoutes = require("./routes/trainer_routes");
const seedAdmin = require("./bootstrap/seeder");
const path = require("path");
const {
  notFound,
  errorHandler,
} = require("./infrastructures/middlewares/errors");

connectDB();
seedAdmin();

app.use(express.json());
app.use(cors());
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/applicant", applicantRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/leave-request", leaveRequestRoutes);
app.use("/api/hr-manager", hrManagerRoutes);
app.use("/api/job-application", jobApplicationRoutes);
app.use("/api/job-vacancy", jobVacancyRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/training", trainingRoutes);
app.use("/api/trainee", traineeRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/user", userRoutes);
app.use("/api/trainer", TrainerRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
