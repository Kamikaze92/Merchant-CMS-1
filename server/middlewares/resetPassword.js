const {verifyLink} = require('../helpers/jwt')
const {User} = require('../models/index')
const resetPasswordMiddleware = async (req, res, next) => {
    try {
      const { id, token } = req.params
      const response = await User.findOne({ where: { id } })
      if(!response){
        throw {name: "email_not_found"}
      }
      const payload = verifyLink(token)
      if (!payload){
          throw {name: "invalid_token"}
      }
      next()
    } catch (err) {
      next(err)
    }
}

module.exports = {resetPasswordMiddleware}
