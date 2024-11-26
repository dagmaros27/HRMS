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
    return await create_leave_request(leaveRequestData);
  }

  async getLeaveRequestById(leaveRequestId) {
    return await get_leave_request_by_id(leaveRequestId);
  }

  async getLeaveRequestsByEmployee(employeeId) {
    return await get_leave_requests_by_employee(employeeId);
  }

  async getAllLeaveRequests() {
    return await get_all_leave_requests();
  }

  async updateLeaveRequest(leaveRequestId, leaveRequestData) {
    return await update_leave_request(leaveRequestId, leaveRequestData);
  }

  async deleteLeaveRequest(leaveRequestId) {
    return await delete_leave_request(leaveRequestId);
  }
}

module.exports = LeaveRequestUsecase;
