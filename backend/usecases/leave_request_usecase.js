const {
  create_leave_request,
  get_leave_request_by_id,
  update_leave_request,
  delete_leave_request,
  get_leave_requests_by_employee,
  get_all_leave_requests,
} = require("../repositories/leave_request");

class LeaveRequestUsecase {
  constructor() {}
  async applyLeaveRequest(leaveRequestData) {
    const created = await create_leave_request(leaveRequestData);
    if (!created) {
      throw new Error("Failed to create leave request");
    }
    return created;
  }

  async getLeaveRequestById(leaveRequestId) {
    const leaveRequest = await get_leave_request_by_id(leaveRequestId);
    if (!leaveRequest) {
      throw new Error("Leave request not found");
    }
    return leaveRequest;
  }

  async getLeaveRequestsByEmployee(employeeId) {
    const leaveRequests = await get_leave_requests_by_employee(employeeId);
    if (!leaveRequests) {
      throw new Error("Failed to get leave requests by employee");
    }
    return leaveRequests;
  }

  async getAllLeaveRequests() {
    const leaveRequests = await get_all_leave_requests();
    if (!leaveRequests) {
      throw new Error("Failed to get all leave requests");
    }
    return leaveRequests;
  }

  async approveLeaveRequest(leaveRequestId) {
    const leaveRequest = await get_leave_request_by_id(leaveRequestId);
    if (!leaveRequest) {
      throw new Error("Leave request not found");
    }
    const updated = { ...leaveRequest, status: "approved" };
    const approved = await update_leave_request(updated);
    if (!approved) {
      throw new Error("Failed to approve leave request");
    }
    return approved;
  }

  async rejectLeaveRequest(leaveRequestId) {
    const leaveRequest = await get_leave_request_by_id(leaveRequestId);
    if (!leaveRequest) {
      throw new Error("Leave request not found");
    }
    const updated = { ...leaveRequest, status: "rejected" };
    const rejected = await update_leave_request(updated);
    if (!rejected) {
      throw new Error("Failed to reject leave request");
    }
    return rejected;
  }

  async deleteLeaveRequest(leaveRequestId) {
    const deleted = await delete_leave_request(leaveRequestId);
    if (!deleted) {
      throw new Error("Failed to delete leave request");
    }
    return deleted;
  }
}

module.exports = LeaveRequestUsecase;
