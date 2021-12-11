const { getPagination, getPagingData } = require("../helpers/pagination");
const  newHistory = require('../helpers/historyInstance');
const { User, Role, Verificator, sequelize, History, Verifier, Merchant, City } = require("../models");
const { Op } = require("sequelize");
const {jwtSign, verifyData} = require('../helpers/jwt')
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
      let condition = {};
      if (search) {
        condition["email"] = { [Op.iLike]: `%${search}%` };
        condition["fullname"] = { [Op.iLike]: `%${search}%` };
      }
      const { limit, offset } = getPagination(page, size);
      const response = await User.findAndCountAll({
        where: condition,
        order: [["fullname", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Role,
            include: [
              {
                model: Privilege,
              },
            ],
          },
          {
            model: Verificator,
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
      console.log(err);
      next(err);
    }
  }
  // get single user
  static async getUser(req, res, next) {
    try {
      const id = +req.params.id;
      const result = await User.findByPk(id, {
        include: [
          {
            model: Role,
            include: [
              {
                model: Privilege,
              },
            ],
          },
          {
            model: Verificator,
          },
        ],
        attributes: {
          exclude: ["password"],
        },
      });
      if (!result) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  // get user status
  static async getUserStatus(req, res, next) {
    //
    try {
      const { email } = req.body
      const find = await User.findOne({where: {email: email}})
      if (!find){
        throw { name: "email_not_found" };  // Email tidak ditemukan Throw
      }
      if (!find.verified_at){
        res.status(200).json({message: "rejected"}) // belum verifikasi 
      }
      if(find.approved_at){
        res.status(200).json({message: "approved"})
      }
      // untuk activate nya belum 
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getUserMerchant(req, res, next) {
    try {
      // search digunakan untuk mencari nama atau email
      // filter digunakan untuk berdasarkan grup sepertinya mmasih belum tau
      const { page, size, search, filter } = req.query;
      if (+page < 1) page = 1;
      if (+size < 1) size = 10;

      //=========
      // const { Verifier } = req.user;
      // if super admin all filter are passed.
      // TODO : this one get from authentication when ready.
      // remove later.
      const verifier = {
        province_id: 170,
        city_id: 2,
      }
      // const role = 'Admin';
      const role = 'Verifikator';
      //=========

      // New Merchant User.
      let conditions = {
        verifier_id: null,
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
          '$Merchant.city_id$': verifier.city_id,
        }
      }

      if (role !== 'Admin' && verifier.province_id) {
        conditions = {
          ...conditions,
          '$Merchant.province_id$': verifier.province_id,
        }
      } else {
        // TODO : hrow error, because minimum should have province_id.
      }

      if (search) {
        conditions = {
          ...conditions,
          [Op.or]: [
            { email: { [Op.iLike]: `%${search}%` } },
            { full_name: { [Op.iLike]: `%${search}%` } },
          ],
        };
      };

      const { limit, offset } = getPagination(page, size);
      const response = await User.findAndCountAll({
        where: conditions,
        order: [["full_name", "ASC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Merchant,
            require: true, // REQUIRED!. because if not have merchant it should return empty array!.
          },
        ],
        limit,
        offset,
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(getPagingData(response, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getUserVerifier(req, res, next) {
    try {
      // search digunakan untuk mencari nama atau email
      // filter digunakan untuk berdasarkan grup sepertinya mmasih belum tau
      const { page, size, search, filter } = req.query;
      if (+page < 1) page = 1;
      if (+size < 1) size = 10;

      //=========
      // const { Verifier } = req.user;
      // if super admin all filter are passed.
      // TODO : this one get from authentication when ready.
      // remove later.
      const verifier = {
        province_id: 170,
        city_id: null,
      }
      // const role = 'Admin';
      const role = 'Verifikator';
      //=========

      // New Verifier User.
      let conditions = {
        verifier_id: { [Op.ne]: null },
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
          '$Verifier.city_id$': { [Op.in]: cities },
        }
      }

      if (search) {
        conditions = {
          ...conditions,
          [Op.or]: [
            { email: { [Op.iLike]: `%${search}%` } },
            { full_name: { [Op.iLike]: `%${search}%` } },
          ],
        };
      };

      const { limit, offset } = getPagination(page, size);
      const response = await User.findAndCountAll({
        where: conditions,
        order: [['created_at', 'DESC']],
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Verifier,
            require: true, // REQUIRED!. because if not have verifier it should return empty array!.
          },
        ],
        limit,
        offset,
      });
      if (!response) {
        throw { name: "user_not_found" };
      }
      res.status(200).json(getPagingData(response, page, limit));
    } catch (error) {
      next(error);
    }
  }

  // create user
  static async createUser(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        fullname,
        email,
        verified_at,
        phone_number,
        password,
        role_id,
        approved_by,
        approved_at,
        verificator_id,
      } = req.body;
      if (!role_id) {
        throw { name: "role_not_found" };
      }
      if (!verificator_id) {
        throw { name: "verificator_not_found" };
      }
      const newUser = {
        fullname,
        email,
        verified_at,
        phone_number,
        password,
        role_id,
        approved_by,
        approved_at,
        verificator_id,
      };
      const create = await User.create(newUser, { transaction: t });
      const payload = {
        entity_name: 'User',
        entity_id: create.id,
        user_id: create.id,
      };
      const isHistoryCreated = await newHistory('createUser', payload);
      if(!isHistoryCreated) {
        throw { err: 'fail_create_history' };
      }
      await t.commit();
      res.status(201).json({ message: "success create new user" });
    } catch (err) {
      await t.rollback();
      console.log(err);
      next(err);
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
      const id = req.params.id
      const findUser = await User.findByPk(id)
      if (!findUser){
        throw { name: "user_not_found" };
      }
      const del = await User.destroy({ where: { id: id }, transaction: t });
      const payload = {
        entity_name: 'User',
        entity_id: findUser.id,
        user_id: req.user.id, // yang menghapus adalah yang login menekan tombol
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
      const {id} = req.params;
      const foundUser = await User.findOne({id});
      const payload = {
        id: foundUser.id,
        email: foundUser.email
      };
      const token = jwtSign(payload);
      let link = `http://localhost:3000/${foundUser.id}/${token}`
      transporter.sendMail(mailActivation(foundUser.email, link), (err) => {
        if(err){
          throw {
            message: 'error Send OTP',
          }
        } else{
          console.log(`email sent to ${response.email}`)
          res.status(201).json({ 
            message: 'Activation link has been sent to your email'
          })
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async approveUser(req, res, next) {
    try {
      const {id, token} = req.params
      const payload = verifyData(token)
      let params = {
        approved_at: new Date(),
        approved_by: payload.email
      }
      await User.update(params,{
        where: {id}
      })
      res.status(201).json({ 
        message: 'User has been approved.',
        id: id
      })
    } catch (err) {
      next(err)
    }
  }

  static async userCreatePassword(req, res, next){
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
        message: 'Password registered. Please attempt login.'
      })
    } catch (err) {
      next(err)
    }
  }
};