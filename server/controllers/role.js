const { Role } = require('../models');

class RoleController {
  static async createRole (req, res, next) {
    try {
      const { name, description } = req.body;
      await Role.create({ name, description });
      res.status({ message: 'New role has been added' });
    } catch (error) {
      next(error);
    }
  }
  static async getAllRoles (req, res, next) {
    try {
      const resp = await Role.findAll();
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async getRole (req, res, next) {
    try {
      const { id } = req.params;
      const resp = await Role.findByPk(id);
      if(!resp) {
        throw { name: 'Data is not found' };
      }
      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  }
  static async updateRole (req, res, next) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const foundRole = await Role.findByPk(id);
      if(!foundRole) {
        throw { name: 'Data is not found' };
      }
      const resp = await Role.update({ name, description });
      console.log(resp);
      res.status(200).json(foundRole);
    } catch (error) {
      next(error);
    }
  }
  static async deleteRole (req, res, next) {
    try {
      const { id } = req.params;
      const foundRole = await Role.findByPk(id);
      if(!foundRole) {
        throw { name: 'Data is not found' };
      }
      await Role.destroy({ where: { id } });
      res.status(200).json({ message: 'Role has been deleted' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoleController;