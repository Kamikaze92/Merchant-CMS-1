const nodemailer = require('nodemailer');

const EMAIL_FROM = process.env.NODEMAILER_EMAIL;
const EMAIL_PW = process.env.NODEMAILER_EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PW,
  },
  pool: true,
});

const mailOtp = (emailUser, otpNumber) => {
  return {
    from: EMAIL_FROM,
    to: emailUser,
    subject: '[PEDULI-LINDUNGI-CMS] Register new user OTP Verification',
    html: `This is your verification code \n <h1>${otpNumber}</h1> \n Input this number to verify your email address.`,
  };
};

const mailActivation = (emailUser, activationLink) => {
  return {
    from: EMAIL_FROM,
    to: emailUser,
    subject: '[PEDULI-LINDUNGI-CMS] Activation Link for verify new user',
    html: `This is your verification link \n <a href="${activationLink}">${activationLink}</a> \n Click link to finish your registration.`,
  };
};

const resetPasswordMail = (emailUser, resetLink) => {
  return {
    from: EMAIL_FROM,
    to: emailUser,
    subject: '[PEDULI-LINDUNGI-CMS] Request reset account password',
    html: `This is your one-time link to reset your password. \n <a href="${resetLink}">${resetLink}</a> \n Click link to reset password.`,
  };
};

module.exports = {
  resetPasswordMail,
  mailActivation,
  mailOtp,
  transporter,
};
