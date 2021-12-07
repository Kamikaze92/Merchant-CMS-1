const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'h8.pedulilindungi.merchant@gmail.com',
        pass: 'finalproject1'
    },
    pool: true
})
let otpNumber = Math.floor(100000 + Math.random() * 900000)
let activationLink = "dummy"

export const mailOtp = (emailUser) => {
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
