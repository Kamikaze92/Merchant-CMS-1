const express = require('express');
const router = express.Router();
const PrivilegeController = require('../controllers/privilege')

router.post('/', PrivilegeController.createPrivilege);
router.get('/', PrivilegeController.getAllPrivilege);
router.get('/:id', PrivilegeController.getPrivilegeById);
router.delete('/:id', PrivilegeController.deletePrivilege);

module.exports = router;