const { User_Group } = require('../models');

class UserGroupsController {
  static async createUserGroup(req, res, next) {
    try {
      const { role_id, privilege_id } = req.body;
      await User_Group.create({ role_id, privilege_id });
      res.status(201).json({ message: 'User Group has been added' });
    } catch (error) {
      next(error);
    }
  }
  static async getAllUserGroups(req, res, next) {
    try {
      const resp = await User_Group.findAll();
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async getUserGroup(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await User_Group.findByPk(id);
      if (!resp) {
        throw { name: 'userGroup_not_found' };
      }
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async updateUserGroup(req, res, next) {
    try {
      const { id } = req.params;
      const { role_id, privilege_id } = req.body;
      const foundUserGroup = await User_Group.findByPk(id);
      if (!foundUserGroup) {
        throw { name: 'userGroup_not_found' };
      }
      await User_Group.update(id, { role_id, privilege_id });
      res.status(200).json({ message: 'User Group has been added' });
    } catch (error) {
      next(error);
    }
  }
  static async deleteUserGroup(req, res, next) {
    try {
      const { id } = req.params;
      const foundUserGroup = await User_Group.findByPk(id);
      if (!foundUserGroup) {
        throw { name: 'userGroup_not_found' };
      }
      await User_Group.destroy({ where: { id } });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserGroupsController;
