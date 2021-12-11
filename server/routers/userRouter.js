const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const {verifyMiddleware} = require('../middlewares/verifyMiddleware');

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUserSoft);
router.post('/activation/:id', UserController.sendActivationLink);
router.patch('/approve-user/:id/:token', verifyMiddleware, UserController.approveUser);
router.patch('/create-password/:id', UserController.userCreatePassword)
module.exports = router;
