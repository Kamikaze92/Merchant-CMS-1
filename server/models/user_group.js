'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Group.init({
    role_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "role_id can't be empty"
        },
        notEmpty: {
          msg: "role_id can't be empty"
        }
      }
    },
    privilege_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "privilege_id can't be empty"
        },
        notEmpty: {
          msg: "privilege_id can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User_Group',
  });
  return User_Group;
};