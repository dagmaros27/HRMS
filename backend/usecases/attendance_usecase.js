const AttendanceRepository = require("../infrastructures/repositories/attendance");

class AttendanceUseCase {
  constructor() {
    this.attendanceRepo = new AttendanceRepository();
  }

  async takeAttendance(employeeId, date, status) {
    return await this.attendanceRepo.createAttendance(employeeId, date, status);
  }

  async getEmployeeStats(employeeId) {
    const attendanceRecords =
      await this.attendanceRepo.getAttendanceByEmployeeId(employeeId);
    const totalDays = attendanceRecords.length;

    const isTodayTaken = attendanceRecords.some(
      (record) => record.date === new Date().toISOString().split("T")[0]
    );
    const absentDays = attendanceRecords.filter(
      (record) => record.status === "absent"
    ).length;

    return {
      totalDays,
      absentDays,
      presentDays: totalDays - absentDays,
      isTodayTaken,
    };
  }

  async getEmployeesInDanger() {
    const allAttendance = await this.attendanceRepo.getAllAttendance(); // Adjust this query as needed.
    const dangerList = {};

    allAttendance.forEach((record) => {
      if (record.status === "absent") {
        if (!dangerList[record.employeeName]) {
          dangerList[record.employeeName] = 0;
        }
        dangerList[record.employeeName]++;
      }
    });

    return Object.entries(dangerList)
      .filter(([_, absentDays]) => absentDays >= 5)
      .map(([employeeName]) => employeeName);
  }
}

module.exports = AttendanceUseCase;
