const { get_admin_by_email } = require("../infrastructures/repositories/admin");
const {
  get_applicant_by_email,
} = require("../infrastructures/repositories/applicant");
const {
  get_employee_by_email,
} = require("../infrastructures/repositories/employee");

class UserUsecase {
  constructor() {}

  async getUserByEmail(email) {
    const admin = await get_admin_by_email(email);
    const applicant = await get_applicant_by_email(email);
    const employee = await get_employee_by_email(email);

    if (admin) {
      admin.role = "ADMIN";
      return admin;
    }
    if (applicant) {
      applicant.role = "APPLICANT";
      return applicant;
    }
    if (employee) {
      if (employee.position === "Hr manager") {
        employee.role = "HR_MANAGER";
      } else if (employee.position === "Employee") {
        employee.role = "EMPLOYEE";
      }
      return employee;
    }
    throw new Error("User not found");
  }
}

module.exports = UserUsecase;
