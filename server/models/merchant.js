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
      // Merchant.belongsTo(models.SubCategory, {foreignKey: 'subcategory_id'})
    }
  };
  Merchant.init({
    user_id: DataTypes.INTEGER,
    nama_pengampuh: DataTypes.STRING,
    address: DataTypes.STRING,
    post_code: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    subcategory_id: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};