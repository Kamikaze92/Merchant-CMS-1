'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verificator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Verificator.hasMany(models.User, {foreignKey: 'verificator_id'})
    }
  };
  Verificator.init({
    instansi: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kota: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Verificator',
  });
  return Verificator;
};