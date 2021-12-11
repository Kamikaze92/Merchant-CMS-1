const { Role, Privilege, User_Group } = require('../models');

class UserGroupsController {
    static async createUserGroup(req, res, next) {
        try {
            const { role_id, privilege_id } = req.body;
            const roleFound = await Role.findByPk(role_id);
            const privileFound = await Privilege.findByPk(privilege_id);
            if(!roleFound) {
                throw { name: 'role_not_found' };
            }
            if(!privileFound) {
                throw { name: 'privilege_not_found' };
            }
            const resp = await User_Group.create({ role_id, privilege_id });
            const payload = {
                entity_name: 'User_Group',
                entity_id: resp.id,
                user_id: 1 //req.user.id
              };
              const isHistoryCreated = await newHistory('createUserGroup', payload);
              if(!isHistoryCreated) {
                throw { name: 'fail_create_history' };
              }
            res.status(201).json({ message: 'User Group has been added' });
        } catch (error) {
            res.status(500).json(error)
            next(error);
        } 
    }
    static async getAllUserGroups(req, res, next) {
        try {
            const resp = await User_Group.findAll({ attributes: { 
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
    static async getUserGroup(req, res, next) {
        try {
            const { id } = req.params;
            const resp = await User_Group.findOne({ where: { id }, attributes: { 
                exclude: ['createdAt', 'updatedAt'] } 
            });
            if(!resp) {
                throw { name: 'userGroup_not_found' };
            }
            res.status(200).json(resp);
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
    static async updateUserGroup(req, res, next) {
        try {
            const { id } = req.params;
            const { role_id, privilege_id } = req.body;
            const foundUserGroup = await User_Group.findByPk(id);
            if(!foundUserGroup) {
                throw { name: 'userGroup_not_found' };
            }
            const resp = await User_Group.update({ role_id, privilege_id }, { where: { id }, returning: true });
            if(!resp[1]) {
                res.status(200).json({ message: 'Everything is already uptodated' });
            } else {
                const payload = {
                    entity_name: 'User_Group',
                    entity_id: resp[1][0].id,
                    user_id: 1 //req.user.id
                };
                const isHistoryCreated = await newHistory('updateUserGroup', payload);
                if(!isHistoryCreated) {
                    throw { name: 'fail_create_history' };
                }
            res.status(200).json({ message: `User Group with id ${id} has been updated` })
            }
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
    static async deleteUserGroup(req, res, next) {
        try {
            const { id } = req.params;
            const foundUserGroup = await User_Group.findByPk(id);
            if(!foundUserGroup) {
                throw { name: 'userGroup_not_found' };
            }
            await User_Group.destroy({ where: { id } });
            const payload = {
                entity_name: 'User_Group',
                entity_id: foundUserGroup.id,
                user_id: 1 //req.user.id
            };
            const isHistoryCreated = await newHistory('deleteUserGroup', payload);
            if(!isHistoryCreated) {
                throw { name: 'fail_create_history' };
            }
            res.status(200).json({ message: `User Group with id ${id} has been deleted` });
        } catch (error) {
            console.log(error);
            // next(error);
        }
    }
}

module.exports = UserGroupsController;