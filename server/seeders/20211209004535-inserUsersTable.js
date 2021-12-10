"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          full_name: "John Doe",
          email: "test@mail.com",
          phone_number: "085299999999",
          password: "12345678",
          category_id: 1,
          tenant_category_id: 1,
          parent_id: 1,
          place_name: "Resto A",
          institution: "PHRI",
          address: "Bandung",
          province_id: 1,
          city_id: 1,
          postal_code: "12345",
          created_at: new Date(),
          updated_at: new Date(),
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
