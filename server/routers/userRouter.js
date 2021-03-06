const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);

// Tempoary put on user, should different router?
router.get('/merchants', UserController.getUserMerchant);
router.get('/merchants/active', UserController.getActiveUserMerchant);
router.get('/verifiers', UserController.getUserVerifier);

router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUserSoft);
router.post('/activation/:id', UserController.sendActivationLink);
router.post('/change-password', UserController.userChangePassword);

module.exports = router;
