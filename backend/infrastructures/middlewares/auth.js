const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {
  Admin,
  Applicant,
  Employee,
  HRManager,
  Trainer,
} = require("../../domain/models/models");
const e = require("express");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
      if (decoded.user_role === "ADMIN") {
        req.user = await Admin.findById(decoded.user_id).select("-password");
        req.user.role = "ADMIN";
      } else if (decoded.user_role === "APPLICANT") {
        req.user = await Applicant.findById(decoded.user_id).select(
          "-password"
        );
        req.user.role = "APPLICANT";
      } else if (decoded.user_role === "EMPLOYEE") {
        req.user = await Employee.findById(decoded.user_id).select("-password");
        req.user.role = "EMPLOYEE";
      } else if (decoded.user_role === "HR_MANAGER") {
        req.user = await Employee.findById(decoded.user_id).select("-password");
        req.user.role = decoded.user_role;
      } else if (decoded.user_role === "TRAINER") {
        const users = await Trainer.find({ employee: decoded.user_id });
        req.user = users[0];
        req.user.role = "TRAINER";
      }

      next();
    } catch (error) {
      console.log(error);

      res.status(401);
      throw new Error("Not authorized, token failed ");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized,  no token found");
  }
});

module.exports = authMiddleware;
