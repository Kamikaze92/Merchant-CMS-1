'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Role.init({
    name: {
      allowNull: false,
      unique: {
        args: true,
        msg: "Role name must be unique"
      },
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Role name can't be empty"
        },
        notEmpty: {
          msg: "Role name can't be empty"
        }
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Role description can't be empty"
        },
        notEmpty: {
          msg: "Role description can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};