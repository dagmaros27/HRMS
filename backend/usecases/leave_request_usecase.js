const {
  create_leave_request,
  get_leave_request_by_id,
  update_leave_request,
  delete_leave_request,
  get_leave_requests_by_employee,
  get_all_leave_requests,
} = require("../repositories/leave_request");

class LeaveRequestUsecase {
  async createLeaveRequest(leaveRequestData) {
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

  async updateLeaveRequest(leaveRequestId, leaveRequestData) {
    const updated = await update_leave_request(
      leaveRequestId,
      leaveRequestData
    );
    if (!updated) {
      throw new Error("Failed to update leave request");
    }
    return updated;
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
