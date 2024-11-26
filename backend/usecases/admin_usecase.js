const {
  create_admin,
  get_admin_by_id,
  get_admin_by_email,
  update_admin,
  delete_admin,
} = require("../repositories/admin");

class AdminUsecase {
  async createAdmin(adminData) {
    return await create_admin(adminData);
  }

  async getAdminById(adminId) {
    return await get_admin_by_id(adminId);
  }

  async getAdminByEmail(email) {
    return await get_admin_by_email(email);
  }

  async updateAdmin(adminId, adminData) {
    return await update_admin(adminId, adminData);
  }

  async deleteAdmin(adminId) {
    return await delete_admin(adminId);
  }
}

module.exports = AdminUsecase;
