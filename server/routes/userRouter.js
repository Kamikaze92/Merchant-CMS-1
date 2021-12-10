const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUserSoft);

module.exports = router;
