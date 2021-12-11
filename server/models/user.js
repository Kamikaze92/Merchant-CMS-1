"use strict";
const { Model } = require("sequelize");
const { getSalt } = require("../helpers/bcrypt");

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
      });
      User.belongsTo(models.Verifier, {
        foreignKey: 'verifier_id',
      })
    }
  }
  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email must be unique",
        },
        validate: {
          notNull: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email format",
          },
          notEmpty: {
            msg: "Email is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
        },
      },
      verified_at: DataTypes.DATE,
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Mobile phone is required",
          },
          notEmpty: {
            msg: "Mobile phone is required",
          },
          len: {
            msg: "Maximum mobile number is 15",
          },
        },
      },
      approved_by: {
        type: DataTypes.INTEGER,
      },
      approved_at: DataTypes.DATE,
      is_rejected: DataTypes.BOOLEAN,
      rejected_reason: DataTypes.STRING,
      verifier_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      modelName: "User",
      hooks: {
        beforeCreate(user) {
          user.email = user.email.toLowerCase();
          user.password = getSalt(user.password);
        },
        beforeUpdate(user) {
          user.email = user.email.toLowerCase();
          user.password = getSalt(user.password);
        },
      },
    }
  );
  return User;
};
