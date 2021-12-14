'use strict';
const { Model } = require('sequelize');
const { getSalt } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Merchant, {
        foreignKey: 'user_id',
        as: 'merchant',
      });

      User.belongsTo(models.Verifier, {
        foreignKey: 'verifier_id',
        as: 'verifier',
      });
      
      User.belongsTo(User, {
        foreignKey: 'approved_by',
        as: 'approver',
      });
    }
  }
  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
          },
        },
      }, // required.
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Email must be unique',
        },
        validate: {
          notNull: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Invalid email format',
          },
          notEmpty: {
            msg: 'Email is required',
          },
        },
      }, // unique, email format, required.
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password is required',
          },
          len: {
            args: [6, 12],
            msg: 'Password minimum 6 and maximum 12 characters',
          },
        },
      }, // min 6 max 12, required.
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Phone phone is required',
          },
          notEmpty: {
            msg: 'Phone phone is required',
          },
          len: {
            args: [0, 15],
            msg: 'Phone number maximum 15 digits',
          },
        },
      }, // max 15 digits, required.
      verifier_id: DataTypes.INTEGER,
      verified_at: DataTypes.DATE,
      approved_by: DataTypes.INTEGER,
      approved_at: DataTypes.DATE,
      is_rejected: DataTypes.BOOLEAN,
      rejected_reason: DataTypes.STRING,
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Creator owner is required",
          },
          notEmpty: {
            msg: "Creator owner is required",
          },
        },
      }, // required.
    },
    {
      sequelize,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      modelName: 'User',
      hooks: {
        beforeSave(user) {
          user.email = user.email.toLowerCase();
          user.password = getSalt(user.password);
        },
      },
    }
  );
  return User;
};
