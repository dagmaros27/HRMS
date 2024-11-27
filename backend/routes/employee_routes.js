const express = require("express");
const router = express.Router();

const {
  createEmployee,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  getEmployeeByEmail,
  getAllEmployees,
} = require("../controllers/employee_controller");

router.post("/", createEmployee);
router.get("/:id", getEmployeeById);
router.get("/", getAllEmployees);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
