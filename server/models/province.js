'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Province.hasMany(models.City, {
        foreignKey: 'province_id',
      });
    }
  }
  Province.init(
    {
      name: {
        allowNull: false,
        unique: {
          args: true,
          msg: 'Name must be unique',
        },
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
          },
        },
      }, // unique, required.
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Creator owner is required',
          },
          notEmpty: {
            msg: 'Creator owner is required',
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
      modelName: 'Province',
    }
  );
  return Province;
};
