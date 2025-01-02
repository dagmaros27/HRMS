const { UserUsecase } = require("../usecases/usecases");

const userUsecase = new UserUsecase();

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userUsecase.getUserByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { userId, userRole } = req.body;
    const profile = await userUsecase.getuserProfile(userId, userRole);
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUserByEmail, getUserProfile };
