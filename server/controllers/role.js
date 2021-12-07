class RoleController {
  static async createRole (req, res, next) {
    try {
      console.log('Create Feature Role');
    } catch (error) {
      next(error);
    }
  }
  static async getAllRoles (req, res, next) {
    try {
      console.log('Get All Feature Role');
    } catch (error) {
      next(error);
    }
  }
  static async getRole (req, res, next) {
    try {
      console.log('Get Feature Role');
    } catch (error) {
      next(error);
    }
  }
  static async updateRole (req, res, next) {
    try {
      console.log('Update Feature Role');
    } catch (error) {
      next(error);
    }
  }
  static async patchRole (req, res, next) {
    try {
      console.log('Patch Feature Role');
    } catch (error) {
      next(error);
    }
  }
  static async deleteRole (req, res, next) {
    try {
      console.log('Delete Feature Role');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoleController;