const express = require("express");
const router = express.Router();
const authMiddleware = require("../infrastructures/middlewares/auth");
const asyncHandler = require("express-async-handler");
const { accessMiddleware } = require("../infrastructures/middlewares/access");
const {
  createEmployee,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  getEmployeeByEmail,
  getAllEmployees,
} = require("../controllers/employee_controller");

router.use(authMiddleware);
//router.use(accessMiddleware(["ADMIN"]));

router.post("/", asyncHandler(createEmployee));
router.get("/:id", asyncHandler(getEmployeeById));
router.get("/", asyncHandler(getAllEmployees));
router.put("/:id", asyncHandler(updateEmployee));
router.delete("/:id", asyncHandler(deleteEmployee));

module.exports = router;
