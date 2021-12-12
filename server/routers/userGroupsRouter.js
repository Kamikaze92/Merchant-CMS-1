const express = require('express');
const router = express.Router();
const UserGroupsController = require('../controllers/userGroups');

router.post('/', UserGroupsController.createUserGroup);
router.get('/', UserGroupsController.getAllUserGroups);
router.get('/:id', UserGroupsController.getUserGroup);
router.put('/', UserGroupsController.updateUserGroup);
router.delete('/', UserGroupsController.deleteUserGroup);

module.exports = router;