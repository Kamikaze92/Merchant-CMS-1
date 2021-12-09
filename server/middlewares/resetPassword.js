const {verifyLink} = require('../helpers/jwt')
const {User} = require('../models/index')
export const resetPasswordMiddleware = async (req, res, next) => {
    try {
      const { id, token } = req.params
      const response = await User.findOne({ where: { id } })
      if(!response){
        throw {name: "Email not exist"}
      }
      const payload = verifyLink(token)
      if (!payload){
          throw {name: "invalidtoken"}
      }
      next()
    } catch (err) {
      next(err)
    }
  }