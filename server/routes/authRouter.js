const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')
const {resetPasswordMiddleware} = require('../middlewares/resetPassword')

router.post('/login', AuthController.userLogin);
router.post('/register', AuthController.userRegister);
router.patch('/otp-verification/:email', AuthController.verifyOtp);
router.post('/resend-otp/:email')
router.post('/forgot-password', AuthController.forgotPassword);
router.put('/reset-password', resetPasswordMiddleware, AuthController.resetPassword);

module.exports = router;