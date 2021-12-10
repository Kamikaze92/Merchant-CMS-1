const jwt = require('jsonwebtoken')
require('dotenv').config()
const privateKey = process.env.JWTKEY

let jwtSign = (data) => {
    return jwt.sign(data, privateKey)
}

let signPasswordLink = (data, password) => {
    return jwt.sign(data, (privateKey + password), {expiresIn: '15m'})
}

let verifyData = (token) => {
    return jwt.verify(token, privateKey)
}

let verifyLink = (token, password) => {
    return jwt.verify(token, (privateKey + password))
}

let decodeJwt = (token) => {
    return jwt.decode(token)
}
module.exports = { jwtSign, verifyData, decodeJwt, signPasswordLink, verifyLink }