const {
  create_hr_manager,
  get_hr_manager_by_id,
  get_hr_manager_by_email,
  update_hr_manager,
  delete_hr_manager,
} = require("../infrastructures/repositories/hrmanager");

class HrManagerUsecase {
  constructor() {}
  async createHrManager(hrManagerData) {
    const created = await create_hr_manager(hrManagerData);
    if (!created) {
      throw new Error("Failed to create hr manager");
    }
    return created;
  }

  async getHrManagerById(hrManagerId) {
    const hrManager = await get_hr_manager_by_id(hrManagerId);
    if (!hrManager) {
      throw new Error("Hr manager not found");
    }
    return hrManager;
  }

  async getHrManagerByEmail(email) {
    const hrManager = await get_hr_manager_by_email(email);
    if (!hrManager) {
      throw new Error("Hr manager not found");
    }
    return hrManager;
  }

  async updateHrManager(hrManagerId, hrManagerData) {
    const updated = await update_hr_manager(hrManagerId, hrManagerData);
    if (!updated) {
      throw new Error("Failed to update hr manager");
    }
    return updated;
  }

  async deleteHrManager(hrManagerId) {
    const deleted = await delete_hr_manager(hrManagerId);
    if (!deleted) {
      throw new Error("Failed to delete hr manager");
    }
    return deleted;
  }

  async getAllHrManagers() {
    const hrManagers = await get_all_hr_managers();
    if (!hrManagers) {
      throw new Error("Failed to get all hr managers");
    }
    return hrManagers;
  }
}

module.exports = HrManagerUsecase;
