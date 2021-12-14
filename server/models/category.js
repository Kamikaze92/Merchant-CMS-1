'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(Category, {
        foreignKey: 'parent_id',
        as: 'sub_category',
      });

      Category.belongsTo(Category, {
        foreignKey: 'parent_id',
        as: 'category',
      });

      Category.hasMany(models.Merchant, {
        foreignKey: 'category_id',
        as: 'merchants',
      });

      Category.hasMany(models.Merchant, {
        foreignKey: 'tenant_category_id',
        as: 'tenant_merchants',
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
          },
        },
      }, // required.
      description: {
        type: DataTypes.STRING,
      },
      is_tenant_category: {
        type: DataTypes.BOOLEAN,
      },
      parent_id: {
        type: DataTypes.INTEGER,
      },
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
      modelName: 'Category',
    }
  );
  return Category;
};
