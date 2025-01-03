const { Attendance } = require("../../domain/models/attendance_model");

class AttendanceRepository {
  async createAttendance(employeeId, date, status) {
    const existingAttendance = await Attendance.findOne({
      employee: employeeId,
      date,
    });
    if (existingAttendance) {
      throw new Error(
        "Attendance already marked for this employee on the given date."
      );
    }

    return await Attendance.create({ employee: employeeId, date, status });
  }

  async getAttendanceById(id) {
    return await Attendance.findById(id);
  }

  async getAttendanceByEmployeeId(employeeId) {
    return await Attendance.find({ employee: employeeId });
  }

  async updateAttendance(id, status) {
    return await Attendance.findByIdAndUpdate(id, { status }, { new: true });
  }
}

module.exports = AttendanceRepository;
