const {
  getReportById,
  getReports,
  createReport,
  downloadPdf,
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

router.get("/", getReports);
router.post("/generate", createReport);
router.get("/download-pdf/:id", downloadPdf);
router.get("/:id", getReportById);

module.exports = router;
