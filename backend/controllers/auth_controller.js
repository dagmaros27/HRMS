const { UserUsecase } = require("../usecases/usecases");
const bcrypt = require("bcrypt");
const userUsecase = new UserUsecase();
const generateToken = require("../infrastructures/utils/generate_token");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }
  const user = await userUsecase.getUserByEmail(email);
  if (!user) {
    return res
      .status(401)
      .json({ message: " email, Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "password,Invalid email or password" });
  }

  const token = generateToken(user._id, user.role);
  user.token = token;
  res.status(200).send({
    token: token,
    user_id: user._id,
    user_name: user.username,
    user_email: user.email,
    user_role: user.role,
  });
};

module.exports = {
  login,
};
