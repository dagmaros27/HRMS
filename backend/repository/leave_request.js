const { LeaveRequest } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_leave_request = AsyncHandler(async (leaveRequest) => {
  leaveRequest = await LeaveRequest.create(leaveRequest);
  return leaveRequest;
});

const get_leave_request_by_id = AsyncHandler(async (id) => {
  const leaveRequest = await LeaveRequest.findById(id);
  return leaveRequest;
});

const update_leave_request = AsyncHandler(async (leaveRequest) => {
  leaveRequest = await LeaveRequest.findByIdAndUpdate(
    leaveRequest._id,
    leaveRequest,
    {
      new: true,
    }
  );
  return leaveRequest;
});

const delete_leave_request = AsyncHandler(async (id) => {
  await LeaveRequest.findByIdAndDelete(id);
});

module.exports = {
  create_leave_request,
  get_leave_request_by_id,
  update_leave_request,
  delete_leave_request,
};
