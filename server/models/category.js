"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(Category, {
        foreignKey: "parent_id",
        as: "SubCategory",
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
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      is_tenant_group: {
        type: DataTypes.BOOLEAN,
      },
      createdBy: {
        type: DataTypes.STRING,
      },
      parent_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
