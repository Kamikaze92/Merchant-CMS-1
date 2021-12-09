const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'h8.pedulilindungi.merchant@gmail.com',
        pass: 'finalproject1'
    },
    pool: true
})

let activationLink = "dummy"

export const mailOtp = (emailUser, otpNumber) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Register new user OTP Verification',
        text: `This is your verification code \n ${otpNumber} \n Input this number to verify your email address.`
    }
}

export const mailActivation = (emailUser) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Activation Link for verify new user',
        text: `This is your verification link \n ${activationLink} \n Click link to finish your registration.`
    }
}

export const resetPasswordMail = (emailUser, resetLink) => {
    return {
        from: 'h8.pedulilindungi.merchant@gmail.com',
        to: emailUser,
        subject: '[PEDULI-LINDUNGI-CMS] Request reset account password',
        text: `This is your one-time link to reset your password. \n ${resetLink} \n Click link to reset password.`
    }
}
