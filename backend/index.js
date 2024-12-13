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
const {
  notFound,
  errorHandler,
} = require("./infrastructures/middlewares/errors");
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/applicant", applicantRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/leave-requests", leaveRequestRoutes);
app.use("/api/hr-manager", hrManagerRoutes);
app.use("/api/job-applications", jobApplicationRoutes);
app.use("/api/job-vacancies", jobVacancyRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/trainings", trainingRoutes);
app.use("/api/trainees", traineeRoutes);
app.use("/api/report", reportRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
