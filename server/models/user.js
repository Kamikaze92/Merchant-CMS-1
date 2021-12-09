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
    }
  }
  User.init(
    {
      fullName: {
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
        unique: true,
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
      verifiedAt: DataTypes.DATE,
      mobilePhone: {
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
      RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role is required",
          },
          notEmpty: {
            msg: "Role is required",
          },
        },
      },
      approvedBy: {
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
      approvedAt: DataTypes.DATE,
      VerficatorId: DataTypes.INTEGER,
      deletedAt: "deletedAt",
      paranoid: true,
      timestamps: true,
    },
    {
      sequelize,
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
