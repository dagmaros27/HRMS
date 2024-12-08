const { get_admin_by_email } = require("../infrastructures/repositories/admin");
const {
  get_applicant_by_email,
} = require("../infrastructures/repositories/applicant");
const {
  get_employee_by_email,
} = require("../infrastructures/repositories/employee");
const {
  get_hr_manager_by_email,
} = require("../infrastructures/repositories/hrmanager");

class UserUsecase {
  constructor() {}

  async getUserByEmail(email) {
    const admin = await get_admin_by_email(email);
    const applicant = await get_applicant_by_email(email);
    const employee = await get_employee_by_email(email);
    const hrManager = await get_hr_manager_by_email(email);

    if (admin) {
      admin.role = "ADMIN";
      console.log(admin);
      return admin;
    }
    if (applicant) {
      applicant.role = "APPLICANT";
      return applicant;
    }
    if (employee) {
      employee.role = "EMPLOYEE";
      return employee;
    }
    if (hrManager) {
      hrManager.role = "HR_MANAGER";
      return hrManager;
    }
    throw new Error("User not found");
  }
}

module.exports = UserUsecase;
