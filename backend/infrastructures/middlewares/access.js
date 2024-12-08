const asyncHandler = require("express-async-handler");

const adminMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "ROLE_ADMIN") {
    res.status(403);
    throw new Error("The user is not allowed");
  }

  next();
});

//for role based access control
const accessMiddleware = (roles) =>
  asyncHandler(async (req, res, next) => {
    console.log("role", req.user.role);
    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error("The user is not allowed");
    }

    next();
  });

module.exports = { adminMiddleware, accessMiddleware };
