const { Employee } = require("../domain/models/models");

const create_employee = async (employee) => {
  employee = await Employee.create(employee);
  return employee;
};

const get_employee_by_id = async (id) => {
  const employee = await Employee.findById(id);
  return employee;
};

const get_employee_by_email = async (email) => {
  const employee = await Employee.findOne({ email: email });
  return employee;
};

const get_all_employees = async () => {
  const employees = await Employee.find({});
  return employees;
};

const update_employee = async (employee) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(
    employee._id,
    employee,
    {
      new: true,
    }
  );
  return updatedEmployee;
};

const delete_employee = async (id) => {
  const employee = await Employee.findByIdAndDelete(id);
  return employee;
};

module.exports = {
  create_employee,
  get_employee_by_id,
  get_employee_by_email,
  get_all_employees,
  update_employee,
  delete_employee,
};
