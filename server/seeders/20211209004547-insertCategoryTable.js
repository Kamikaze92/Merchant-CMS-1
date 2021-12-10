"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "Fasilitas Kesehatan",
        },
        {
          id: 2,
          name: "Tempat Ibadah",
        },
        {
          id: 3,
          name: "Makanan & Minuman",
        },
        {
          id: 4,
          name: "Sarana Transportasi",
        },
        {
          id: 5,
          name: "Sarana Hiburan",
        },
        {
          id: 6,
          name: "Sarana Olahraga",
        },
        {
          id: 7,
          name: "Kecantikan & Relaksasi",
        },
        {
          id: 8,
          name: "Perbelanjaan",
        },
        {
          id: 9,
          name: "Perkantoran",
        },
        {
          id: 10,
          name: "Industri",
        },
        {
          id: 11,
          name: "Institusi Pendidikan",
        },
        {
          id: 12,
          name: "Akomodasi",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
