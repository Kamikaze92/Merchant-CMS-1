"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          fullName: "admin",
          email: "admin@gmail.com",
          password: "password",
          verifiedAt: new Date(),
          mobilePhone: "628515602393",
          // RoleId: 'Admin',
          approvedAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          approvedBy: new Date(),
          approvedAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fullName: "province",
          email: "province@gmail.com",
          password: "password",
          verifiedAt: new Date(),
          mobilePhone: "628515602393",
          // RoleId: 'province',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

// npx sequelize-cli model:generate --name Category --attributes name:string
// npx sequelize-cli model:generate --name SubCategory --attributes name:string,CategoryId:integer
