const { LeaveRequestUsecase } = require("../usecases/usecases");

const leaveRequestUsecase = new LeaveRequestUsecase();

const applyLeaveRequest = async (req, res) => {
  const leaveRequestData = req.body;
  if (req.user.role === "TRAINER") {
    leaveRequestData.employee = req.user.employee;
  } else {
    leaveRequestData.employee = req.user._id;
  }
  const leaveRequest = await leaveRequestUsecase.applyLeaveRequest(
    leaveRequestData
  );
  res.status(201).json(leaveRequest);
};

const getLeaveRequestById = async (req, res) => {
  const leaveRequestId = req.params.id;
  const leaveRequest = await leaveRequestUsecase.getLeaveRequestById(
    leaveRequestId
  );
  res.status(200).json(leaveRequest);
};

const getLeaveRequestsByEmployee = async (req, res) => {
  const employeeId = req.params.employeeId;
  const leaveRequests = await leaveRequestUsecase.getLeaveRequestsByEmployee(
    employeeId
  );
  res.status(200).json(leaveRequests);
};

const getAllLeaveRequests = async (req, res) => {
  if (["EMPLOYEE"].includes(req.user.role)) {
    const leaveRequests = await leaveRequestUsecase.getLeaveRequestsByEmployee(
      req.user._id
    );
    return res.status(200).json(leaveRequests);
  } else if (["TRAINER"].includes(req.user.role)) {
    const leaveRequests = await leaveRequestUsecase.getLeaveRequestsByEmployee(
      req.user.employee
    );
    return res.status(200).json(leaveRequests);
  }
  const leaveRequests = await leaveRequestUsecase.getAllLeaveRequests();
  res.status(200).json(leaveRequests);
};

const approveLeaveRequest = async (req, res) => {
  const leaveRequestId = req.params.id;
  console.log(leaveRequestId);
  const leaveRequest = await leaveRequestUsecase.approveLeaveRequest(
    leaveRequestId
  );
  res.status(200).json(leaveRequest);
};

const rejectLeaveRequest = async (req, res) => {
  const leaveRequestId = req.params.id;
  const leaveRequest = await leaveRequestUsecase.rejectLeaveRequest(
    leaveRequestId
  );
  res.status(200).json(leaveRequest);
};

module.exports = {
  applyLeaveRequest,
  getLeaveRequestById,
  getLeaveRequestsByEmployee,
  getAllLeaveRequests,
  approveLeaveRequest,
  rejectLeaveRequest,
};
