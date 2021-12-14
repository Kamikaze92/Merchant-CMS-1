'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Verifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Verifier.hasOne(models.User, {
        foreignKey: 'verifier_id',
        as: 'verifier',
      });

      Verifier.belongsTo(models.City, {
        foreignKey: 'city_id',
        as: 'city',
      })

      Verifier.belongsTo(models.Province, {
        foreignKey: 'province_id',
        as: 'province',
      })
      
    }
  }
  Verifier.init(
    {
      institution: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Institution is required',
          },
          notEmpty: {
            msg: 'Institution is required',
          },
        },
      }, // required.
      province_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: 'Province is required',
          },
          notEmpty: {
            msg: 'Province is required',
          },
        },
      }, // required.
      city_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      }, // required.
      created_by: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      modelName: 'Verifier',
    }
  );
  return Verifier;
};
