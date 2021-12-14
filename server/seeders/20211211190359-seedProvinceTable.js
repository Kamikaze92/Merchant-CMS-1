'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Provinces', 
      [
        {
          name: 'Aceh',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bali',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bangka Belitung',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Banten',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bengkulu',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jawa Tengah',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalimantan Tengah',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sulawesi Tengah',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jawa timur',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalimantan Timur',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nusa Tenggara Timur',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gorontalo',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daerah Khusus Ibukota Jakarta',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jambi',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lampung',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maluku',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sulawesi Utara',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sumatera Utara',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Papua',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Riau',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kepulauan Riau',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sulawesi Tenggara',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalimantan Selatan',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sulawesi Selatan',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sumatera Selatan',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jawa Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalimantan Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nusa tenggara Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Papua Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sulawesi Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sumatera Barat',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daerah Istimewa Yogyakarta',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kalimantan Utara',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maluku Utara',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Provinces', null, {});
  }
};
