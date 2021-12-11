const { History } = require('../models');

const newHistory = async (type, payload) => {
    try {
        console.log(type, payload);
        let messageType;
        switch (type) {
            case 'createUser':
                messageType = 'Create user';
                break;
            case 'updateUser':
                messageType = 'Update user';
                break;
            case 'deleteUserSoft':
                messageType = 'Delete user soft';
                break;
            case 'deleteUserHard':
                messageType = 'Delete user hard';
                break;
            case 'createRole':
                messageType = 'Create role';
                break;
            case 'updateRole':
                messageType = 'Update role';
                break;
            case 'deleteRole':
                messageType = 'Delete role';
                break;
            case 'createPrivilege':
                messageType = 'Create privilege';
                break;
            case 'deletePrivilege':
                messageType = 'Delete privilege';
                break;
            case 'createUserGroup':
                messageType = 'Create user group';
                break;
            case 'updateUserGroup':
                messageType = 'Update user group';
                break;
            case 'deleteUserGroup':
                messageType = 'Delete user group';
                break;
        }
        const historyInput = {
            ...payload,
            description: `${messageType} with id ${payload.entity_id}`
        }
        console.log(historyInput);
        await History.create(historyInput, { returning: true });
        return true;  
    } catch (error) {
        return false;
    }
}

module.exports = newHistory;