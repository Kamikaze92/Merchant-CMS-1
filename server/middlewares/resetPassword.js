const {verifyLink, decodeJwt} = require('../helpers/jwt')
const {User} = require('../models/index')
const resetPasswordMiddleware = async (req, res, next) => {
    console.log("masookkkkkk")
    try {
      const { id, token } = req.params
      const { password } = decodeJwt(token);

      const payload = verifyLink(token, password);
      if (!payload){
        throw {name: "invalid_token"}
      }
      const response = await User.findOne({ where: { id, email: payload.email } })
      if(!response){
        throw {name: "email_not_found"}
      }
      next()
    } catch (err) {
      next(err)
    }
}

module.exports = {resetPasswordMiddleware}
