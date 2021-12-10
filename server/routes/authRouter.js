const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')
const {resetPasswordMiddleware} = require('../middlewares/resetPassword')
const {verifyMiddleware} = require('../middlewares/verifyMiddleware')

router.post('/login', AuthController.userLogin);
router.post('/register', AuthController.userRegister);
router.patch('/otp-verification/:id/:token', verifyMiddleware, AuthController.verifyUser);
router.post('/resend-otp/:id/:token', AuthController.resendOtp)
router.post('/forgot-password/:id/:token', AuthController.forgotPassword);
router.patch('/reset-password/:id/:token', resetPasswordMiddleware, AuthController.resetPassword);

module.exports = router;