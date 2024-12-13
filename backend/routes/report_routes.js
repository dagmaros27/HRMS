const {
  getReportById,
  getReports,
  createReport,
} = require("../controllers/report_controller");
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../infrastructures/middlewares/auth");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);
//router.use(accessMiddleware(["HR_MANAGER", "ADMIN"]));

router.post("/generate", createReport);
router.get("/", getReports);
router.get("/:id", getReportById);

module.exports = router;
