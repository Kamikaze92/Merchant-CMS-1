"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      verified_at: {
        type: Sequelize.DATE,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      approved_by: {
        type: Sequelize.INTEGER,
      },
      approved_at: {
        type: Sequelize.DATE,
      },
      is_rejected: {
        type: Sequelize.BOOLEAN,
      },
      rejected_reason: {
        type: Sequelize.STRING,
      },
      verifier_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Verifiers",
          key: "id",
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
    await queryInterface.dropTable("Users");
  },
};
