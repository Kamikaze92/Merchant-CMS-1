const { getPagination, getPagingData } = require("../helpers/pagination");
const  newHistory = require('../helpers/historyInstance');
const { User, Role, Verificator, sequelize, History, UserGroups, Category, Verifier, Merchant, Province, City } = require("../models");
const { Op } = require("sequelize");
const {jwtSign, verifyData} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcrypt')
const {transporter, mailActivation} = require('../helpers/nodemailer')
module.exports = class UserController {
  // your code goes here

  // get all user
  static async getUsers(req, res, next) {
    try {
      // search digunakan untuk mencari nama atau email
      // filter digunakan untuk berdasarkan grup sepertinya mmasih belum tau
      let { page, size, search, filter } = req.query;
      if (+page < 1) page = 1;
      if (+size < 1) size = 10;
      let conditions = {
        verifier_id: { [Op.ne] : null },
        verified_at: null,
        approved_at: null,
        approved_by: null,
        is_rejected: null,
        deleted_at: null,
      };
      if (search) {
        conditions["email"] = { [Op.iLike]: `%${search}%` };
        conditions["fullname"] = { [Op.iLike]: `%${search}%` };
      }
      const { limit, offset } = getPagination(page, size);
      const response = await User.findAndCountAll({
        where: conditions,
        order: [["full_name", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Verifier,
            as: 'verifier',
          },
        ],
        limit,
        offset,
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(getPagingData(response, page, limit));
    } catch (err) {
      console.log(err.message);
      next(err);
    }
  }
  // get single user
  static async getUser(req, res, next) {
    try {
      const id = +req.params.id;

      const user = await User.findByPk(id);
      const include = [];
      if (user.verifier_id) {
        include.push(
          {
            model: Verifier,
            require: true, // REQUIRED!. because if not have verifier it should return empty array!.
          },
        );
      } else {
        include.push(
          {
            model: Merchant,
            require: true, // REQUIRED!. because if not have merchant it should return empty array!.
            include: [
              {
                model: Category,
                require: true, // REQUIRED!. because merchant should have category!.
              },
            ]
          }
        );
      };

      const result = await User.findByPk(id, {
        include,
        attributes: {
          exclude: ["password"],
        },
      });

      if (!result) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  // fixed
  static async getUserMerchant(req, res, next) {
    try {
      //=========
      // const { Verifier } = req.user;
      // if super admin all filter are passed.
      // TODO : this one get from authentication when ready.
      // remove later.
      const { verifier } = req.user;
      // const role = req.user.Role.name;
      // const role = 'Admin';
      const role = 'Verifikator';
      //=========

      // New Merchant User.
      let conditions = {
        verifier_id: null,
        verified_at: null,
        approved_at: null,
        approved_by: null,
        is_rejected: null,
        deleted_at: null,
      };

      // Filter for list merchant.
      /**
       * Should throw error if.
       * not admin and 
       * verifier null or
       * province null (because verifier should have province)
       */
      if (role !== 'Admin' && (!verifier || !verifier.province_id)) {
        // TODO : throw error, because should have verifier.
        throw {
          name: 'NotAuthorized',
          msg: ''
        }
      };

      if (role !== 'Admin' && verifier.city_id) {
        conditions = {
          ...conditions,
          '$merchant.city_id$': verifier.city_id,
        }
      }

      if (role !== 'Admin' && verifier.province_id) {
        conditions = {
          ...conditions,
          '$merchant.province_id$': verifier.province_id,
        }
      }

      const response = await User.findAll({
        where: conditions,
        order: [["created_at", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Merchant,
            as: 'merchant',
            require: true, // REQUIRED!. because if not have merchant it should return empty array!.
            include: [
              {
                model: Category,
                as: 'sub_category',
                require: true, // REQUIRED!. because merchant should have category!.
              },
              {
                model: Province,
                as: 'province',
                require: true, // REQUIRED!. because if not have merchant it should return empty array!.
              },
              {
                model: City,
                as: 'city',
                require: true, // REQUIRED!. because if not have merchant it should return empty array!.
              }
            ]
          }
        ],
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  // fixed
  static async getUserVerifier(req, res, next) {
    try {
      //=========
      // const { Verifier } = req.user;
      // if super admin all filter are passed.
      // TODO : this one get from authentication when ready.
      // remove later.
      const { verifier } = req.user;
      
      // const role = 'Admin';
      const role = 'Verifikator';
      //=========

      // New Verifier User.
      let conditions = {
        verifier_id: { [Op.ne]: null },
        verified_at: null,
        approved_at: null,
        approved_by: null,
        is_rejected: null,
        deleted_at: null,
      };

      // Filter for list verifier.
      /**
       * Should throw error if.
       * not admin and 
       * verifier null or
       * province null or
       * city not null 
       */
      if (role !== 'Admin' && (!verifier || !verifier.province_id || verifier.city_id)) {
        // TODO : hrow error, because minimum should have province_id.
        throw {
          name: 'NotAuthorized',
          msg: ''
        }
      } 
      
      // if not admin, should check province id to show all the user below their province.
      if (verifier.province_id && role !== 'Admin') {
        let cities = await City.findAll({
          where: {
            province_id: verifier.province_id,
          },
        });
        cities = cities.map(e => e.id);
        conditions = {
          ...conditions,
          '$verifier.province_id$': verifier.province_id,
          '$verifier.city_id$': { [Op.in]: cities },
        }
      }

      const response = await User.findAll({
        where: conditions,
        order: [['created_at', 'DESC']],
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Verifier,
            as: 'verifier',
            require: true, // REQUIRED!. because if not have verifier it should return empty array!.
            include: [
              {
                model: Province,
                as: 'province',
                require: true, // REQUIRED!. because if not have merchant it should return empty array!.
              },
              {
                model: City,
                as: 'city',
                require: true, // REQUIRED!. because if not have merchant it should return empty array!.
              }
            ]
          },
        ],
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  // fixed
  static async getActiveUserMerchant(req, res, next) {
    try {
      //=========
      // const { Verifier } = req.user;
      // if super admin all filter are passed.
      // TODO : this one get from authentication when ready.
      // remove later.
      const { verifier } = req.user;
      // const role = req.user.Role.name;
      // const role = 'Admin';
      const role = 'Verifikator';
      //=========

      // New Merchant User.
      let conditions = {
        verifier_id: null,
        verified_at: { [Op.ne]: null },
        approved_at: { [Op.ne]: null },
        approved_by: { [Op.ne]: null },
        is_rejected: null,
        deleted_at: null,
      };

      // Filter for list merchant.
      /**
       * Should throw error if.
       * not admin and 
       * verifier null or
       * province null (because verifier should have province)
       */
      if (role !== 'Admin' && (!verifier || !verifier.province_id)) {
        // TODO : throw error, because should have verifier.
        throw {
          name: 'NotAuthorized',
          msg: '',
        }
      };

      if (role !== 'Admin' && verifier.city_id) {
        conditions = {
          ...conditions,
          '$merchant.city_id$': verifier.city_id,
        }
      }

      if (role !== 'Admin' && verifier.province_id) {
        conditions = {
          ...conditions,
          '$merchant.province_id$': verifier.province_id,
        }
      }

      const response = await User.findAll({
        where: conditions,
        order: [["created_at", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Merchant,
            as: 'merchant',
            require: true, // REQUIRED!. because if not have merchant it should return empty array!.
            include: [
              {
                model: Merchant,
                require: true, // REQUIRED!. because merchant should have province!.
                as: 'non_tenant_merchant',
                attributes: {
                  include: ["place_name"],
                },
              },
              {
                model: Category,
                require: true, // REQUIRED!. because merchant should have category!.
                as: 'sub_category',
                attributes: {
                  include: ["name", "description"],
                },
                include: {
                  model: Category,
                  require: true, // REQUIRED!. because merchant should have category!.
                  as: 'category',
                  attributes: {
                    include: ["name", "description"],
                  },
                },
              },
              {
                model: Province,
                require: true, // REQUIRED!. because merchant should have province!.
                as: 'province',
                attributes: {
                  include: ["name"],
                },
              },
              {
                model: City,
                require: true, // REQUIRED!. because merchant should have city!.
                as: 'city',
                attributes: {
                  include: ["name"],
                },
              }
            ]
          }
        ],
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  // create user
  static async createUser(req, res, next) {
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
          province_id,
          city_id,
        }, { transaction: t });
      };

      // user transaction
      const userTransaction = await User.create({
        full_name,
        email,
        phone_number,
        password: 'random',
        verifier_id: verifierTransaction?.id || null,
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
        }, { transaction: t });
      }

      // rework ? using transaction ?...
      // const payload = {
      //   entity_name: 'User',
      //   entity_id: create.id,
      //   user_id: create.id,
      // };

      // const isHistoryCreated = await newHistory('createUser', payload);

      // if(!isHistoryCreated) {
      //   throw { err: 'fail_create_history' };
      // }

      await t.commit();
      res.status(201).json({ message: "success create new user" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  // update user
  static async updateUser(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.id;
      const { fullname, phoneNumber } = req.body;
      let userUpdate = {
        fullname,
        phoneNumber,
      };
      const result = await User.findByPk(id);
      if (!result) {
        throw { name: "user_not_found" };
      }
      const update = await User.update(userUpdate, {
        where: { id: id },
        transaction: t
      });
      const payload = {
        entity_mame: 'User',
        entity_id: result.id,
        user_id: req.user.id || result.id,
      };
      const isHistoryCreated = await newHistory('updateUser', payload);
      if(!isHistoryCreated) {
        throw { err: 'fail_create_history' };
      }
      await t.commit();
      res.status(200).json({ message: "Success update the user" });
    } catch (err) {
      await t.rollback();
      console.log(err);
      next(err);
    }
  }
  // delete user (soft) //nambahin paranoid di model User = true
  static async deleteUserSoft(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.id;
      const findUser = await User.findByPk(id);
      if (!findUser){
        throw { name: "user_not_found" };
      }
      const del = await User.destroy({ where: { id }, transaction: t });
      // const payload = {
      //   entity_name: 'User',
      //   entity_id: findUser.id,
      //   user_id: req.user.id, // yang menghapus adalah yang login menekan tombol
      // };
      // const isHistoryCreated = await newHistory('deleteUserSoft', payload);
      // if(!isHistoryCreated) {
      //   throw { err: 'fail_create_history' };
      // }
      await t.commit();
      res.status(200).json({ message: "Success delete the User" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  // delete user (hard) //nambahin paranoid di model User = true
  static async deleteUserHard(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const id = req.params.id;
      const findUser = await User.findByPk(id);
      if (!findUser) {
        throw { name: "user_not_found" };
      }
      const del = await User.destroy({ where: { id: id }, force: true, transaction: t });
      const payload = {
        entity_name: 'User',
        entity_id: findUser.id,
        user_id: req.user.id // yang menghapus adalah yang login menekan tombol
      };
      const isHistoryCreated = await newHistory('deleteUserSoft', payload);
      if(!isHistoryCreated) {
        throw { err: 'fail_create_history' };
      }
      await t.commit();
      res.status(200).json({ message: "Success delete the User" });
    } catch (err) {
      await t.rollback();
      console.log(err);
      next(err);
    }
  }

  static async sendActivationLink(req, res, next){
    try {
      const { id } = req.params;

      // not only check on id but need to make sure its still not approved 
      // to prevent false positive.
      const user = await User.findOne({
        where: {
          id,
          approved_by: {
            [Op.eq]: null,
          }
        }
      });

      // update user approved_by
      const response = await User.update({
        approved_by: req.user.id,
      }, {
        where: { id: user.id },
      });

      // !TODO : create history.

      // generate token, fot activation later.
      const token = jwtSign({
        id: response.id,
        email: response.email,
      });

      let link = `${process.env.SERVER_URL}/${response.id}/${token}`
      transporter.sendMail(mailActivation(user.email, link), (error) => {
        if(error){
          throw {
            message: 'error Send OTP',
          }
        } else{
          console.log(`email sent to ${response.email}`)
          res.status(200).json({ 
            message: 'Activation link has been sent to your email',
          });
        };
      });
    } catch (error) {
      next(error);
    }
  }

  static async approveUser(req, res, next) {
    try {
      const { id, token } = req.params;

      // if token was invalid its throw error.
      verifyData(token);
      await User.update({
        approved_at: new Date(),
      }, {
        where: {id}
      });

      // !TODO : create history.

      res.status(200).json({ 
        message: 'User has been approved.',
        id,
      });
    } catch (error) {
      next(error);
    };
  };

  static async userChangePassword(req, res, next){
    try {
      const { id } = req.user.id;
      const response = await User.findOne({where: {id}})
      const { password, confirmPassword } = req.body;
      if(comparePassword(password, response.password)){
        if (password !== confirmPassword) {
          throw {
            name: "password_not_match"
          };
        };
        //create hooks beforeUpdate to hash new password
        await User.update({ password }, {
          where: { id },
        });
  
        // !TODO : create history.
  
        res.status(200).json({ 
          message: 'Password changed. You can login now.'
        });
      }
    } catch (error) {
      next(error);
    };
  };
};