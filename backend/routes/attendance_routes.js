const AttendanceController = require("../controllers/attendance_controller");
const AsyncHandler = require("express-async-handler");
const express = require("express");
const router = express.Router();
const attendanceController = new AttendanceController();
const { accessMiddleware } = require("../infrastructures/middlewares/access");
const AuthMiddleware = require("../infrastructures/middlewares/auth");

router.use(AuthMiddleware);
// router.use(accessMiddleware(["ADMIN", "HR_MANAGER"]));
router.post("/take", AsyncHandler(attendanceController.takeAttendance));
router.get(
  "/stats/:employeeId",
  AsyncHandler(attendanceController.getEmployeeStats)
);
router.get("/danger", AsyncHandler(attendanceController.getEmployeesInDanger));

module.exports = router;
