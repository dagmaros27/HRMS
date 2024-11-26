const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin_controller");

router.post("/", createAdmin);
router.get("/:id", getAdminById);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
