const {comparePassword} = require('../helpers/bcrypt')
const {jwtSign, signPasswordLink} = require('../helpers/jwt')
const {transporter, mailOtp, resetPasswordMail} = require('../helpers/nodemailer')
const { sequelize, User, Merchant, Verifier } = require('../models');

module.exports = class AuthController {
  // your code goes here
  static async userLogin (req,res,next) {
    try {
        const {email, password} = req.body
        let response = await User.findOne({
            where: {email}
        })
        if(response && comparePassword(password, response.password)){
          if(!response.approve_at){
              throw {name: "not_authenticated"}
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
            throw {name: 'invalid_user'}
        }
    } 
    catch (err) {
        next(err)
    }
  }

  /**
   * Because the merchant registration process and the verifier are the same.
   * It is necessary to add non database field [use_type] to identify what type of user will be created.
   * use_type: 'Merchant' or 'Verifier'
   */
  static async userRegister(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        user_type, // This is FLAG to identify user is Merchant or verifier.
        full_name,
        email,
        phone_number,
        category_id,
        tenant_category_id,
        parent_id,
        place_name,
        institution,
        address,
        postal_code,
        province_id,
        city_id,
      } = req.body;
      
      // user transaction
      const userTransaction = await User.create({
        full_name,
        email,
        phone_number,
        password: 'random',
      }, { transaction: t });

      // for verifier
      if (user_type === 'Verifier') {
        // Insert verifier data.
        await Verifier.create({
          institution,
          province_id,
          city_id,
        });

        // Insert 
      };

      // merchant transaction 
      if (user_type === 'Merchant') {
        await Merchant.create({
          user_id: userTransaction.id,
          institution,
          address,
          province_id,
          city_id,
          place_name,
          category_id,
          postal_code,
          tenant_category_id,
          parent_id,
        }, { transaction: t });
      }

      // create history
      // !need to add history later.

      // if transaction successfull, send the OTP.
      t.afterCommit(() => {
        // using padStart so it will be always 6 digit.
        const OTP = String(Math.floor(Math.random() * 999999)).padStart(6, '0');
        transporter.sendMail(mailOtp(userTransaction.email, OTP), (error) => {
          if(error){
            // !need to rework error name.
            throw {
              message: 'error Send OTP',
            }
          } else{
            // ! store OTP & email on redis.
            res.status(201).json({
              message: `Registration success, OTP was sent to ${userTransaction.email}.`,
            });
          };
        });
      });
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async forgotPassword(req, res, next){
      try {
        const { email } = req.body;
        const response = await User.findOne({ where: { email } });
        if(!email) {
          throw { name: 'email_not_found' }
        }
        const payload = {
            id: response.id,
            email: response.email
        };
        const token = signPasswordLink(payload, response.password);
        let link = `http://localhost:3000/${response.id}/${token}`
        transporter.sendMail(resetPasswordMail(response.email, link), (err) => {
          if(err){
            console.log(err)
          } else{
            console.log(`email sent to ${response.email}`)
          }
        })
        res.status(200).json({ 
          message: 'A link has been sent to your email'
        })
      } catch (err) {
        next(err)
      } 
  }

  static async resetPassword(req, res, next){
    try {
      const { id } = req.params
      const { password, password2 } = req.body
      if(password !== password2){
        throw {name: "password_not_match"}
      }
      //create hooks beforeUpdate to hash new password
      let params = { password }
      await User.update(params, {
        where: { id }
      })
      res.status(201).json({ 
        message: 'Your password has been changed, please attempt login'
      })
    } catch (err) {
      next(err)
    }
  }
}