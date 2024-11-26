const {
  create_employee,
  get_employee_by_id,
  get_employee_by_email,
  update_employee,
  delete_employee,
  get_all_employees,
} = require("../repositories/employee");

class EmployeeUsecase {
  async createEmployee(employeeData) {
    return await create_employee(employeeData);
  }

  async getEmployeeById(employeeId) {
    return await get_employee_by_id(employeeId);
  }

  async getEmployeeByEmail(email) {
    return await get_employee_by_email(email);
  }

  async getAllEmployees() {
    return await get_all_employees();
  }

  async updateEmployee(employeeId, employeeData) {
    return await update_employee(employeeId, employeeData);
  }

  async deleteEmployee(employeeId) {
    return await delete_employee(employeeId);
  }
}

module.exports = EmployeeUsecase;
