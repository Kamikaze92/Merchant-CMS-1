const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')
const {resetPasswordMiddleware} = require('../middlewares/resetPassword')
const {verifyMiddleware} = require('../middlewares/verifyMiddleware')

router.post('/login', AuthController.userLogin);
router.post('/register', AuthController.userRegister);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/otp-verification/:id/:token', verifyMiddleware, AuthController.verifyUser);
router.post('/resend-otp/:id/:token', AuthController.resendOtp)
router.post('/reset-password/:id/:token', resetPasswordMiddleware, AuthController.resetPassword);
router.patch('/approve-user/:id/:token', verifyMiddleware, AuthController.approveUser);
router.post('/check-status', AuthController.checkStatus)

module.exports = router;