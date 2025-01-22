const { Admin, Employee, Applicant } = require("../domain/models/models");

const {
  get_admin_by_id,
  get_admin_by_email,
  update_admin,
} = require("../infrastructures/repositories/admin");
const {
  get_applicant_by_id,
  get_applicant_by_email,
  update_applicant,
} = require("../infrastructures/repositories/applicant");
const {
  get_employee_by_id,
  get_employee_by_email,
  update_employee,
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

  async getuserProfile(userId, userRole) {
    if (userRole === "ADMIN") {
      return await get_admin_by_id(userId);
    }
    if (userRole === "APPLICANT") {
      return await get_applicant_by_id(userId);
    }
    if (userRole === "HR_MANAGER" || userRole === "EMPLOYEE") {
      return await get_employee_by_id(userId);
    }
    throw new Error("User not found");
  }

  async updateUserProfile(user) {
    if (user.role === "ADMIN") {
      const admin = Admin(user);
      return await update_admin(admin._id, admin);
    }
    if (user.role === "APPLICANT") {
      const applicant = Applicant(user);
      return await update_applicant(applicant._id, applicant);
    }
    if (user.role === "HR_MANAGER" || user.role === "EMPLOYEE") {
      const employee = Employee(user);
      return await update_employee(employee);
    }
    throw new Error("User not found");
  }
}

module.exports = UserUsecase;
