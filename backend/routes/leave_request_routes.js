const express = require("express");
const router = express.Router();
const AsyncHandler = require("express-async-handler");

const {
  applyLeaveRequest,
  approveLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestById,
  rejectLeaveRequest,
  getLeaveRequestsByEmployee,
} = require("../controllers/leave_request_controller");
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["EMPLOYEE"]));

router.post("/apply", AsyncHandler(applyLeaveRequest));
router.put("/approve/:id", AsyncHandler(approveLeaveRequest));
router.get("/", AsyncHandler(getAllLeaveRequests));
router.get("/:id", AsyncHandler(getLeaveRequestById));
router.put("/reject/:id", AsyncHandler(rejectLeaveRequest));
router.get("/employee/:employeeId", AsyncHandler(getLeaveRequestsByEmployee));

module.exports = router;
