'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // no need association.
    }
  }
  History.init(
    {
      entity_name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Entity name is required',
          },
          notEmpty: {
            msg: 'Entity name is required',
          },
        },
      }, // required.
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: {
            msg: 'Description is required',
          },
          notEmpty: {
            msg: 'Description is required',
          },
        },
      }, // required.
      entity_id: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Entity ID is required',
          },
          notEmpty: {
            msg: 'Entity ID is required',
          },
        },
      }, // required,
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      modelName: 'History',
    }
  );
  return History;
};
