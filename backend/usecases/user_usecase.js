const { get_admin_by_email } = require("../repositories/admin_repository");
const {
  get_applicant_by_email,
} = require("../repositories/applicant_repository");
const {
  get_employee_by_email,
} = require("../repositories/employee_repository");
const {
  get_hr_manager_by_email,
} = require("../repositories/hr_manager_repository");

const UserDto = require("../domain/dto/user");

class UserUsecase {
  constructor() {}

  async getUserByEmail(email) {
    const admin = await get_admin_by_email(email);
    const applicant = await get_applicant_by_email(email);
    const employee = await get_employee_by_email(email);
    const hrManager = await get_hr_manager_by_email(email);

    if (admin) {
      admin.role = "ADMIN";
      return UserDto(admin);
    }
    if (applicant) {
      applicant.role = "APPLICANT";
      return UserDto(applicant);
    }
    if (employee) {
      employee.role = "EMPLOYEE";
      return UserDto(employee);
    }
    if (hrManager) {
      hrManager.role = "HR_MANAGER";
      return UserDto(hrManager);
    }
    throw new Error("User not found");
  }
}

module.exports = UserUsecase;
