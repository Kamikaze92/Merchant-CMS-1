'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Verificator.hasMany(models.User, {foreignKey: 'verificator_id'})
    }
  };
  History.init({
    entity_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    entity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};