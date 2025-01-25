const { AdminUsecase } = require("../usecases/usecases");
const { Admin } = require("../domain/models/admin_model");

const adminUsecase = new AdminUsecase();

const seedAdmin = async () => {
  try {
    const existingAdmin = await adminUsecase.getAdminByEmail("admin@test.com"); // Check if any admin exists
    if (existingAdmin) {
      return;
    }
    const adminData = {
      username: "admin", // Default username
      password: "admin", // Default password
      email: "admin@test.com", // Default email
    };

    const admin = new Admin(adminData);

    const newAdmin = await adminUsecase.createAdmin(admin);
    console.log("Admin seeded successfully:", newAdmin);
  } catch (error) {
    console.error("Error seeding admin:", error.message);
  }
};

module.exports = seedAdmin;
