const { AttendanceUseCase } = require("../usecases/usecases");

class AttendanceController {
  constructor() {
    this.attendanceUseCase = new AttendanceUseCase();
  }

  async takeAttendance(req, res) {
    const { employeeId, date, status } = req.body;

    try {
      const result = await this.attendanceUseCase.takeAttendance(
        employeeId,
        date,
        status
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEmployeeStats(req, res) {
    const { employeeId } = req.params;

    try {
      const stats = await this.attendanceUseCase.getEmployeeStats(employeeId);
      res.status(200).json(stats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEmployeesInDanger(req, res) {
    try {
      const employees = await this.attendanceUseCase.getEmployeesInDanger();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AttendanceController;
