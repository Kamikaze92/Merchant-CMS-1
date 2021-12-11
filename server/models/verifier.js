'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Verifier.init({
    institution: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    modelName: 'Verifier',
  });
  return Verifier;
};