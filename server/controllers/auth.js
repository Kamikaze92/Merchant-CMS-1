const { comparePassword } = require('../helpers/bcrypt');
const { jwtSign } = require('../helpers/jwt');
const { transporter, mailOtp } = require('../helpers/nodemailer');

module.exports = class AuthController {
  // your code goes here
  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!req.body.email) {
        throw { name: 'email_not_found' };
      } else if (!req.body.password) {
        throw { name: 'password_not_found' };
      }

        let response = await User.findOne({
            where: {email}
        })
        if(response && comparePassword(password, response.password)){
          if(!response.approve_at){
              throw {name: "accountnotverified"}
            } 
          else {
              const access_token = jwtSign({
                id: response.id,
                email: response.email
              })
              res.status(200).json({
                access_token: access_token
              })
            }
          }
        else{
            throw {name: 'invalidlogin'}
        }
    } 
    catch (err) {
        next(err)
    }
  }

  static async userRegister(req, res, next) {
    try {
        const {nama_lengkap, email, no_hp, password, role_id, verificator_id} = req.body
        //validation here
        
        let response = await User.create({nama_lengkap, email, no_hp, password, role_id, verificator_id})
        if (response){
          let otp = Math.floor(100000 + Math.random() * 900000)
          transporter.sendMail(mailOtp(response.email, otp), (err) => {
            if(err){
              console.log(err)
            } else{
              console.log(`email sent to ${response.email}`)
            }
          })
          if(req.body.otp === otp){
            res.status(201).json({
              message: `Your registered are on process, please wait 1x24 hour.`
            })
          } else {
            throw {name: "invalidotp"}
          }
        }
      }
      res.status(201).json({
        message: `Success registered ${response.email}`,
      });
    } catch (err) {
      next(err);
    }
  }


  static async resendOtp(){

  }
}
