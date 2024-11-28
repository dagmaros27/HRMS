const { UserUsecase } = require("../usecases/usecases");
const bcrypt = require("bcrypt");
const userUsecase = new UserUsecase();
const generateToken = require("../utils/generateToken");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }
  const user = await userUsecase.getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.send({
    _id: user._id,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role),
  });
};

module.exports = {
  login,
};
