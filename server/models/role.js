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
    modelName: 'Role',
  });
  return Role;
};