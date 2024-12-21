const { EmployeeUsecase } = require("../usecases/usecases");

const employeeUsecase = new EmployeeUsecase();

const createEmployee = async (req, res) => {
  const employeeData = req.body;
  console.log(employeeData);
  const employee = await employeeUsecase.createEmployee(employeeData);
  res.status(201).json(employee);
};

const getEmployeeById = async (req, res) => {
  const employeeId = req.params.id;
  console.log(employeeId);
  const employee = await employeeUsecase.getEmployeeById(employeeId);
  console.log(employee);
  res.status(200).json(employee);
};

const getEmployeeByEmail = async (req, res) => {
  const email = req.params.email;
  const employee = await employeeUsecase.getEmployeeByEmail(email);
  res.status(200).json(employee);
};

const getAllEmployees = async (req, res) => {
  const employees = await employeeUsecase.getAllEmployees();
  res.status(200).json(employees);
};

const updateEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const employeeData = req.body;
  const employee = await employeeUsecase.updateEmployee(
    employeeId,
    employeeData
  );
  res.status(200).json(employee);
};

const deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const employee = await employeeUsecase.deleteEmployee(employeeId);
  res.status(200).json(employee);
};

module.exports = {
  createEmployee,
  getEmployeeById,
  getEmployeeByEmail,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
