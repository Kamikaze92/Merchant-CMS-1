'use strict';
const { getSalt } = require('../helpers/bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          full_name: 'Super Admin',
          email: 'admin@fakemail.com',
          phone_number: '6285277499999',
          password: getSalt('supersecret'),
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
