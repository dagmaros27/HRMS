const {
  getReportById,
  getReports,
  createReport,
  downloadPdf,
} = require("../controllers/report_controller");
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../infrastructures/middlewares/auth");
const asyncHandler = require("express-async-handler");
const {
  adminMiddleware,
  accessMiddleware,
} = require("../infrastructures/middlewares/access");

router.use(authMiddleware);

//router.use(accessMiddleware(["HR_MANAGER", "ADMIN"]));

router.get("/", asyncHandler(getReports));
router.post("/generate", asyncHandler(createReport));
router.get("/download-pdf/:id", asyncHandler(downloadPdf));
router.get("/:id", asyncHandler(getReportById));

module.exports = router;
