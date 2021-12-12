'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchant.belongsTo(models.Category, {
        foreignKey: 'category_id'},
      );
    }
  };
  Merchant.init({
    user_id: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    place_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    tenant_category_id: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    modelName: 'Merchant',
  });
  return Merchant;
};