const {comparePassword} = require('../helpers/bcrypt')
const {jwtSign} = require('../helpers/jwt')
const {transporter, mailOtp} = require('../helpers/nodemailer')

module.exports = class AuthController {
  // your code goes here
  static async userLogin (req,res,next) {
    try {
        const {email, password} = req.body
        if(!req.body.email){
            throw {name: 'mailnotfound'}
        } else if(!req.body.password){
            throw {name: 'passnotfound'}
        }

        let response = await User.findOne({
            where: {email}
        })

        if(response && comparePassword(password, response.password)){
            const access_token = jwtSign({
                id: response.id,
                email: response.email
            })
            res.status(200).json({
                access_token: access_token
            })
        }
        else{
            throw {name: 'invalidlogin'}
        }
    } 
    catch (err) {
        next(err)
    }
  }

  static async userRegister(req,res,next) {
    try {
        const {} = req.body
        //validation here
        let response = await User.create({})
        if (response){
          transporter.sendMail(mailOtp(response.email), (err) => {
            if(err){
              console.log(err)
            } else{
              console.log(`email sent`)
            }
          })
        }
        res.status(201).json({
            message: `Success registered ${response.email}`
        })
      }
      catch (err) {
        next(err)
    }
  }
}
