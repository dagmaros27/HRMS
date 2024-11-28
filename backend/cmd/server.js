const connectDB = require("../bootstrap/db");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const adminRoutes = require("../routes/admin_routes");
const authRoutes = require("../routes/auth_routes");
connectDB();

app.use(express.json());
app.use(cors());
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
