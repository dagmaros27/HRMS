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

const updateUserProfile = async (req, res) => {
  try {
    const { name, email, phone, address, _id } = req.body;
    let resumeUrl = null;

    if (req.file) {
      resumeUrl = `/uploads/${req.file.filename}`; // Adjust according to your storage logic
    }

    if (!_id) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    if (req.user._id.toString() !== _id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Prepare user data for update
    const updatedUser = {
      name: name || undefined,
      email: email || undefined,
      phone: phone || undefined,
      address: address || undefined,
      resume: resumeUrl || undefined,
    };

    // Remove fields that are undefined
    Object.keys(updatedUser).forEach((key) => {
      if (updatedUser[key] === undefined) {
        delete updatedUser[key];
      }
    });
    updatedUser._id = _id;
    const result = await userUsecase.updateUserProfile(updatedUser);

    res.status(200).json(result); // Send the updated user data back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUserByEmail, getUserProfile, updateUserProfile };
