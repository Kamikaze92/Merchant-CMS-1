const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'h8.pedulilindungi.merchant@gmail.com',
        pass: 'finalproject1'
    },
    pool: true
})

const mailOtp = (emailUser, otpNumber) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Register new user OTP Verification',
        html: `This is your verification code \n <h1>${otpNumber}</h1> \n Input this number to verify your email address.`
    }
}

const mailActivation = (emailUser, activationLink) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Activation Link for verify new user',
        html: `This is your verification link \n <a>${activationLink}</a> \n Click link to finish your registration.`
    }
}

const resetPasswordMail = (emailUser, resetLink) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Request reset account password',
        html: `This is your one-time link to reset your password. \n <a>${resetLink}</a> \n Click link to reset password.`
    }
}

module.exports = {resetPasswordMail, mailActivation, mailOtp, transporter}
