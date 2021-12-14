const {comparePassword} = require('../helpers/bcrypt')
const {jwtSign, signPasswordLink} = require('../helpers/jwt')
const newHistory = require('../helpers/historyInstance');
const {transporter, mailOtp, resetPasswordMail} = require('../helpers/nodemailer')
const { sequelize, User, Merchant, Verifier } = require('../models');
const redis = require('../config/redis')
module.exports = class AuthController {
  // your code goes here
  static async userLogin (req,res,next) {
    try {
      const { email, password } = req.body;

      let response = await User.findOne({
        where: { email },
      });

      if(response && comparePassword(password, response.password)){
        if(!response.approved_at){
          throw {
            name: "not_authenticated",
          };
        } else {
          const access_token = jwtSign({
            id: response.id,
            email: response.email,
          });
          res.status(200).json({
            access_token: access_token,
          });
        };
      } else {
        throw {
          name: 'invalid_user',
        };
      };
    } catch (error) {
      next(error);
    };
  };

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
      
      // guard
      if (user_type !== 'Merchant' && user_type !== 'Verifier' ) {
        throw {
          name: 'errorUserType',
          mgs: 'user type should be "Merchant" or "Verifier"',
        }
      }

      // for verifier
      let verifierTransaction = null;
      if (user_type === 'Verifier') {
        verifierTransaction = await Verifier.create({
          institution,
          province_id: province_id || null,
          city_id: city_id || null,
          created_by: 1,
        }, { transaction: t });
      };

      // user transaction
      const userTransaction = await User.create({
        full_name,
        email,
        phone_number,
        password: 'random',
        verifier_id: verifierTransaction?.id || null,
        created_by: 1,
      }, { transaction: t });

      // merchant transaction.
      // should chose one, category_id or tenant_category_id.
      // cannot both.
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
          created_by: 1,
        }, { transaction: t });
      }

      // !TODO: create history
      //  still error, should use transaction ?
      // const isHistoryCreated = await newHistory('createUser', userTransaction);
      // if(!isHistoryCreated) {
      //     throw { name: 'fail_create_history' };
      // }
      // if transaction successfull, send the OTP.
      t.afterCommit(async () => {
        // using padStart so it will be always 6 digit.
        const OTP = String(Math.floor(Math.random() * 999999));
        transporter.sendMail(mailOtp(userTransaction.email, OTP), async (error) => {
          try {
            if(error){
              // !need to rework error name.
              throw {
                name: 'error_send_otp',
              };
            } else{
              const otpToken = jwtSign({
                id: userTransaction.id,
                email: userTransaction.email,
              });
              await redis.set(`${userTransaction.id}`, OTP, 'ex', 120);
              res.status(201).json({
                message: `OTP was sent to ${userTransaction.email}.`,
                id: userTransaction.id,
                token: otpToken,
              });
            };
          } catch (error) {
            next(error);
          };
        });
      });
      await t.commit();
    } catch (error) {
      console.log(error)
      await t.rollback();
      next(error);
    };
  };

  static async verifyUser(req, res, next) {
    //ambil otp dan email dari redis
    try {
      const { otp } = req.body;
      const redisOtp = await redis.get(`${req.params.id}`);
      if (redisOtp !== otp) {
        throw { name: 'invalid_otp' };
      }

      const { id } = req.params;
      const response = await User.update(
        { verified_at: new Date() },
        { where: { id } },
      );
      if (!response) {
        throw { name: 'not_authenticated' };
      }
      res.status(200).json({
        message:
          'Registration success! Please check your email by 3x24 for verification process.',
      });
    } catch (error) {
      next(error);
    }
  }

  static async resendOtp(req, res, next){
    try {
      const { id, token } = req.params;
      const user = await User.findByPk(id);
      
      if (!user) {
        throw { name: 'not_found' };
      };
      
      const OTP = String(Math.floor(Math.random() * 999999));
      transporter.sendMail(mailOtp(user.email, OTP), async (error) => {
        try {
          if(error){
            // !need to rework error name.
            throw {
              name: 'error_send_otp',
            };
          } else{
            const otpToken = jwtSign({
              id: user.id,
              email: user.email,
            });
            await redis.set(`${user.id}`, OTP, 'ex', 120);
            res.status(200).json({
              message: `OTP was sent to ${user.email}.`,
              id: user.id,
              token: otpToken,
            });
          };
        } catch (error) {
          next(error);
        };
      });
    } catch (err) {
      next(err)
    }
  }

  static async forgotPassword(req, res, next){
      try {
        const { email, url } = req.body;
        const response = await User.findOne({ where: { email } });
        if(!email) {
          throw { name: 'email_not_found' }
        }
        if(!response){
          throw { name: 'user_not_found'}
        }
        const payload = {
            id: response.id,
            email: response.email
        };
        const token = signPasswordLink(payload, response.password);
        let link = `${url}/${response.id}/${token}`
        transporter.sendMail(resetPasswordMail(response.email, link), (err) => {
          if(err){
            throw {
              name: 'error_send_otp',
            }
          } else{
            console.log(`email sent to ${response.email}`)
            res.status(201).json({ 
              message: 'A link has been sent to your email'
            })
          }
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

  static async checkStatus(req,res,next){
    try {
      const {email} = req.body
      console.log(email)
      if(!req.body.email){
        throw {name: 'email_not_found'}
      }
      const response = await User.findOne({where: {email}})
      let statusMessage = ''
      if(!response){
        statusMessage = 'Email Tidak Ditemukan'
      } else if(!response.verified_at){
        statusMessage = 'Email Tidak Ditemukan'
      } else if(response.is_rejected == true){
        statusMessage = 'Ditolak'
      } else if(response.approved_at && response.approved_by && response.verified_at ) {
        statusMessage = 'Sudah Aktif'
      } else if(!response.approved_at && !response.approved_by){
        statusMessage = 'Menunggu Proses Persetujuan Akun'
      } else if(!response.approved_at) {
        statusMessage = 'Sudah Disetujui'
      } 
      res.status(200).json({
        status: statusMessage
      })
    } catch (err) {
      next(err)
    }
  }
}

