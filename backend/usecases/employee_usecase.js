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
    const created = await create_employee(employeeData);
    if (!created) {
      throw new Error("Failed to create employee");
    }
    return created;
  }

  async getEmployeeById(employeeId) {
    const employee = await get_employee_by_id(employeeId);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }

  async getEmployeeByEmail(email) {
    const employee = await get_employee_by_email(email);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }

  async getAllEmployees() {
    const employees = await get_all_employees();
    if (!employees) {
      throw new Error("Failed to get all employees");
    }
    return employees;
  }

  async updateEmployee(employeeId, employeeData) {
    const updated = await update_employee(employeeId, employeeData);
    if (!updated) {
      throw new Error("Failed to update employee");
    }
    return updated;
  }

  async deleteEmployee(employeeId) {
    const deleted = await delete_employee(employeeId);
    if (!deleted) {
      throw new Error("Failed to delete employee");
    }
    return deleted;
  }
}

module.exports = EmployeeUsecase;
