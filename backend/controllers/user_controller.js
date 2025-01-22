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
    console.log("Form Data:", req.body); // Log the form data
    console.log("File Data:", req.file); // Log the uploaded file

    const { name, email, phone, address, _id } = req.body;
    let resumeUrl = null;

    // Handle resume upload (if present)
    if (req.file) {
      // Store the resume file URL or path in the database
      // You can store it on a cloud service or locally; for now, we assume it's a path
      resumeUrl = `/uploads/${req.file.filename}`; // Adjust according to your storage logic
    }

    // Validate user input
    if (!_id) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    // Ensure the user making the request is authorized to update the profile
    if (req.user._id.toString() !== _id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Prepare user data for update
    const updatedUser = {
      name,
      email,
      phone,
      address,
      role: req.user.role,
      resume: resumeUrl || req.body.resume, // Use the uploaded file URL or existing resume from the body
    };

    // Pass the updated user data to your userUsecase for database update
    const result = await userUsecase.updateUserProfile(updatedUser);

    res.status(200).json(result); // Send the updated user data back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUserByEmail, getUserProfile, updateUserProfile };
