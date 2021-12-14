'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Verifiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      institution: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      province_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinces',
          key: 'id',
        },
      },
      city_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Verifiers');
  },
};
