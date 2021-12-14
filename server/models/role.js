'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasMany(models.User_Group, {
        foreignKey: 'role_id',
        as: 'user_groups',
      })
    }
  }
  Role.init(
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
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Description is required',
          },
          notEmpty: {
            msg: 'Description is required',
          },
        },
      }, // required
    },
    {
      sequelize,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      modelName: 'Role',
    }
  );
  return Role;
};
