const jwt = require('jsonwebtoken')
require('dotenv').config()
const privateKey = process.env.JWTKEY

let jwtSign = (data) => {
    return jwt.sign(data, privateKey)
}

let verifyData = (token) => {
    return jwt.verify(token, privateKey)
}

let decodeJwt = (token) => {
    return jwt.decode(token)
}
module.exports = { jwtSign, verifyData, decodeJwt }