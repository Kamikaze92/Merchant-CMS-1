const {verifyLink} = require('../helpers/jwt')
const {User} = require('../models/index')
const resetPasswordMiddleware = async (req, res, next) => {
<<<<<<< HEAD
=======

>>>>>>> 34a2a0e1f392491b3846769ca27f01764e0e9139
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
<<<<<<< HEAD
}

module.exports = {resetPasswordMiddleware}
=======

}

module.exports = {resetPasswordMiddleware}
>>>>>>> 34a2a0e1f392491b3846769ca27f01764e0e9139
