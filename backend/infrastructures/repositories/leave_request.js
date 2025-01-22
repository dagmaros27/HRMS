const { LeaveRequest } = require("../../domain/models/models");

const create_leave_request = async (leaveRequest) => {
  leaveRequest = await LeaveRequest.create(leaveRequest);
  return leaveRequest;
};

const get_leave_request_by_id = async (id) => {
  const leaveRequest = await LeaveRequest.findById(id).populate({
    path: "employee",
    select: "name email",
  });
  console.log(leaveRequest);
  return leaveRequest;
};

const get_leave_requests_by_employee = async (employeeId) => {
  const leaveRequests = await LeaveRequest.find({ employee: employeeId });
  return leaveRequests;
};

const get_all_leave_requests = async () => {
  const leaveRequests = await LeaveRequest.find().populate({
    path: "employee",
    select: "name  position",
  });

  return leaveRequests;
};

const update_leave_request = async (leaveRequest) => {
  leaveRequest = await LeaveRequest.findByIdAndUpdate(
    leaveRequest._id,
    leaveRequest,
    {
      new: true,
    }
  );
  return leaveRequest;
};

const delete_leave_request = async (id) => {
  await LeaveRequest.findByIdAndDelete(id);
};

module.exports = {
  create_leave_request,
  get_leave_request_by_id,
  get_leave_requests_by_employee,
  get_all_leave_requests,
  update_leave_request,
  delete_leave_request,
};
