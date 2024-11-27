const jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
  const token = jwt.sign(
    { user_id: id, user_role: role },
    process.env.JWT_TOKEN_KEY,
    {
      expiresIn: "30d",
    }
  );

  return token;
};

module.exports = generateToken;
