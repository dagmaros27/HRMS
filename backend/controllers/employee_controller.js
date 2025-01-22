const {
  EmployeeUsecase,
  HRManagerUsecase,
  TrainerUsecase,
} = require("../usecases/usecases");

const employeeUsecase = new EmployeeUsecase();
const hrManagerUsecase = new HRManagerUsecase();
const trainerUsecase = new TrainerUsecase();

const createEmployee = async (req, res) => {
  const employeeData = req.body;
  console.log(employeeData);

  const employee = await employeeUsecase.createEmployee(employeeData);

  if (employeeData.position === "Hr manager") {
    hr = {
      employee: employee._id,
      department: "HR",
    };
    const hrManager = await hrManagerUsecase.createHrManager(hr);
  }

  if (employeeData.position === "Trainer") {
    trainer = {
      employee: employee._id,
    };

    const createdTrainer = await trainerUsecase.createTrainer(trainer);
  }
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
  const employeeData = req.body;
  console.log("update is calledddd");
  const employee = await employeeUsecase.updateEmployee(employeeData);
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
