const {
  create_admin,
  get_admin_by_id,
  get_admin_by_email,
  update_admin,
  delete_admin,
} = require("../repositories/admin");

class AdminUsecase {
  async createAdmin(adminData) {
    const created = await create_admin(adminData);
    if (!created) {
      throw new Error("Failed to create admin");
    }
    return created;
  }

  async getAdminById(adminId) {
    const admin = await get_admin_by_id(adminId);
    if (!admin) {
      throw new Error("Admin not found");
    }
    return admin;
  }

  async getAdminByEmail(email) {
    const admin = await get_admin_by_email(email);
    if (!admin) {
      throw new Error("Admin not found");
    }
    return admin;
  }

  async updateAdmin(adminId, adminData) {
    const updated = await update_admin(adminId, adminData);
    if (!updated) {
      throw new Error("Failed to update admin");
    }
    return updated;
  }

  async deleteAdmin(adminId) {
    const deleted = await delete_admin(adminId);
    if (!deleted) {
      throw new Error("Failed to delete admin");
    }
    return deleted;
  }
}

module.exports = AdminUsecase;
