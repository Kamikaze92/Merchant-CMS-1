'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Privilege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Privilege.init({
    name: {
      allowNull: false,
      unique: {
        args: true,
        msg: 'Privilege name must be unique'
      },
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Privilege name can't be empty"
        },
        notEmpty: {
          msg: "Privilege name can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Privilege',
  });
  return Privilege;
};