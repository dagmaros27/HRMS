const {
  create_hr_manager,
  get_hr_manager_by_id,
  get_hr_manager_by_email,
  update_hr_manager,
  delete_hr_manager,
} = require("../repositories/hrmanager");

class HrManagerUsecase {
  async createHrManager(hrManagerData) {
    return await create_hr_manager(hrManagerData);
  }

  async getHrManagerById(hrManagerId) {
    return await get_hr_manager_by_id(hrManagerId);
  }

  async getHrManagerByEmail(email) {
    return await get_hr_manager_by_email(email);
  }

  async updateHrManager(hrManagerId, hrManagerData) {
    return await update_hr_manager(hrManagerId, hrManagerData);
  }

  async deleteHrManager(hrManagerId) {
    return await delete_hr_manager(hrManagerId);
  }

  async getAllHrManagers() {
    return await get_all_hr_managers();
  }
}

module.exports = HrManagerUsecase;
