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

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
