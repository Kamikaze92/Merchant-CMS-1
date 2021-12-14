'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Group.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: 'role',
      });

      User_Group.belongsTo(models.Privilege, {
        foreignKey: 'privilege_id',
        as: 'privilege',
      });
    }
  }
  User_Group.init(
    {
      role_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: 'Role is required',
          },
          notEmpty: {
            msg: 'Role is required',
          },
        },
      }, // required
      privilege_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: 'Privilege is required',
          },
          notEmpty: {
            msg: 'Privilege is required',
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
      modelName: 'User_Group',
    }
  );
  return User_Group;
};
