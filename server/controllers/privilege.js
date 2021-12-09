const { Privilege } = require('../models');

class PrivilegeController {
  static async createPrivilege(req, res, next) {
    try {
      const { name } = req.body;
      await Privilege.create({ name });
      res.status(201).json({ message: 'New privilege has been added' });
    } catch (error) {
      next(error);
    }
  }
  static async getAllPrivilege(req, res, next) {
    try {
      const resp = await Privilege.findAll();
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async getPrivilegeById(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await Privilege.findByPk(id);
      if (!resp) {
        throw { name: 'privilege_not_found' };
      }
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async deletePrivilege(req, res, next) {
    try {
      const { id } = req.params;
      const privilegeFound = await Privilege.findByPk(id);
      if (!privilegeFound) {
        throw { name: 'privilege_not_found' };
      }
      await Privilege.destroy({ where: { id } });
      res.status(200).json({ message: 'Privilege has been deleted' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PrivilegeController;
