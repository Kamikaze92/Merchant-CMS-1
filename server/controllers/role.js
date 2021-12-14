const { Role } = require('../models');
const newHistory = require('../helpers/historyInstance');

class RoleController {
  static async createRole (req, res, next) {
    try {
      const { name, description } = req.body;
      const resp = await Role.create({ name, description });
      const payload = {
        entity_name: 'Role',
        entity_id: resp.id,
        user_id: req.user.id
      };
      const isHistoryCreated = await newHistory('createRole', payload);
      if(!isHistoryCreated) {
        throw { name: 'fail_create_history' };
      }
      res.status(201).json({
        id: resp.id,
        name: resp.name,
        description: resp.description,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getAllRoles (req, res, next) {
    try {
      const resp = await Role.findAll({ attributes: 
        { exclude: ['createdAt', 'updatedAt'] } 
      });
      if(!resp.length) {
        res.status(404).json({ message: 'Role is not found' });
    } else {
        res.status(200).json(resp);
    }
    } catch (error) {
      next(error);
    }
  }
  static async getRole (req, res, next) {
    try {
      const { id } = req.params;
      const resp = await Role.findOne({ where: { id }, attributes: 
        { exclude: ['createdAt', 'updatedAt'] } 
      });
      if(!resp) {
        throw { name: 'role_not_found' };
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
        throw { name: 'role_not_found' };
      }
      const resp = await Role.update({ name, description }, { where: { id }, returning: true });
      if(!resp[1]) {
        res.status(200).json({ message: 'Everything is already uptodated' });
      } else {
        const payload = {
          entity_name: 'Role',
          entity_id: resp[1][0].id,
          user_id: req.user.id
        };
        const isHistoryCreated = await newHistory('updateRole', payload);
        if(!isHistoryCreated) {
          throw { name: 'fail_create_history' };
        }
        res.status(200).json({ message: `Role with id ${id} has been updated` })
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteRole (req, res, next) {
    try {
      const { id } = req.params;
      const foundRole = await Role.findByPk(id);
      if(!foundRole) {
        throw { name: 'role_not_found' };
      }
      await Role.destroy({ where: { id } });
      const payload = {
        entity_name: 'Role',
        entity_id: foundRole.id,
        user_id: req.user.id
      };
      const isHistoryCreated = await newHistory('deleteRole', payload);
      if(!isHistoryCreated) {
        throw { name: 'fail_create_history' };
      }
      res.status(200).json({ message: `Role with id ${id} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoleController;
