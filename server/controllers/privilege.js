const { Privilege } = require('../models');

class PrivilegeController {
    static async createPrivilege (req, res, next) {
        try {
            const { name } = req.body;
            const resp = await Privilege.create({ name });
            const payload = {
                entity_name: 'Privilege',
                entity_id: resp.id,
                user_id: req.user.id
              };
              const isHistoryCreated = await newHistory('createPrivilege', payload);
              if(!isHistoryCreated) {
                throw { name: 'Fail create history' };
              }
            res.status(201).json({ message: 'New privilege has been added' })
        } catch (error) {
            next(error);
        }
    }
    static async getAllPrivilege (req, res, next) {
        try {
            const resp = await Privilege.findAll({ attributes: { 
                exclude: ['createdAt', 'updatedAt'] } 
            });
            if(!resp.length) {
                res.status(200).json({ message: 'Data is not found' });
            } else {
                res.status(200).json(resp);
            }
        } catch (error) {
            next(error);
        }
    }
    static async getPrivilegeById (req, res, next) {
        try {
            const { id } = req.params;
            const resp = await Privilege.findOne({ where: { id }, attributes: { 
                exclude: ['createdAt', 'updatedAt'] } 
            });
            if(!resp) {
                throw { name: 'Data is not found' };
            }
            res.status(200).json(resp);
        } catch (error) {
            next(error);
        }
    }
    static async deletePrivilege (req, res, next) {
        try {
            const { id } = req.params;
            const privilegeFound = await Privilege.findByPk(id);
            if(!privilegeFound) {
                throw { name: 'Data is not found' };
            }
            await Privilege.destroy({ where: { id } });
            const payload = {
                entity_name: 'Role',
                entity_id: privilegeFound.id,
                user_id: req.user.id
              };
              const isHistoryCreated = await newHistory('deletePrivilege', payload);
              if(!isHistoryCreated) {
                throw { name: 'Fail create history' };
              }
            res.status(200).json({ message: 'Privilege has been deleted' })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PrivilegeController;