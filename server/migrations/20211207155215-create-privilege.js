'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Privileges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      action_a: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      action_b: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      action_c: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      action_d: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      action_e: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Privileges');
  }
};