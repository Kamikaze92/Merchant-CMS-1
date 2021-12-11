const { Privilege } = require('../models');
const newHistory = require('../helpers/historyInstance');

class PrivilegeController {
    static async createPrivilege (req, res, next) {
        try {
            const { name } = req.body;
            const resp = await Privilege.create({ name });
            const payload = {
                entity_name: 'Privilege',
                entity_id: resp.id,
                user_id: 1 //req.user.id
              };
              const isHistoryCreated = await newHistory('createPrivilege', payload);
              if(!isHistoryCreated) {
                throw { name: 'fail_create_history' };
              }
              res.status(201).json({
                id: resp.id,
                name: resp.name
              });
        } catch (error) {
            console.log(error);
            // next(error);
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
            console.log(error);
            // next(error);
        }
    }
    static async getPrivilegeById (req, res, next) {
        try {
            const { id } = req.params;
            const resp = await Privilege.findOne({ where: { id }, attributes: { 
                exclude: ['createdAt', 'updatedAt'] } 
            });
            if(!resp) {
                throw { name: 'privilege_not_found' };
            }
            res.status(200).json(resp);
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
    static async deletePrivilege (req, res, next) {
        try {
            const { id } = req.params;
            const privilegeFound = await Privilege.findByPk(id);
            if(!privilegeFound) {
                throw { name: 'privilege_not_found' };
            }
            await Privilege.destroy({ where: { id } });
            const payload = {
                entity_name: 'Role',
                entity_id: privilegeFound.id,
                user_id: 1 //req.user.id
              };
              const isHistoryCreated = await newHistory('deletePrivilege', payload);
              if(!isHistoryCreated) {
                throw { name: 'fail_create_history' };
              }
            res.status(200).json({ message: 'Privilege has been deleted' })
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
}

module.exports = PrivilegeController;