const express = require("express");
const router = express.Router();

const {
  applyLeaveRequest,
  approveLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestById,
  rejectLeaveRequest,
  getLeaveRequestsByEmployee,
} = require("../controllers/leave_request_controller");

router.post("/apply", applyLeaveRequest);
router.put("/approve/:id", approveLeaveRequest);
router.get("/", getAllLeaveRequests);
router.get("/:id", getLeaveRequestById);
router.put("/reject/:id", rejectLeaveRequest);
router.get("/employee/:employeeId", getLeaveRequestsByEmployee);

module.exports = router;
