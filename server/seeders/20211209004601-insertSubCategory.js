"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "SubCategories",
      [
        {
          name: "Apotek",
          CategoryId: 1,
        },
        {
          name: "Rumah Sakit",
          CategoryId: 1,
        },
        {
          name: "Klinik",
          CategoryId: 1,
        },
        {
          name: "Laboratorium",
          CategoryId: 1,
        },
        {
          name: "Puskesmas",
          CategoryId: 1,
        },
        {
          name: "Gereja Katolik",
          CategoryId: 2,
        },
        {
          name: "Gereja Kristen",
          CategoryId: 2,
        },
        {
          name: "Klenteng",
          CategoryId: 2,
        },
        {
          name: "Pura",
          CategoryId: 2,
        },
        {
          name: "Vihara",
          CategoryId: 2,
        },
        {
          name: "Masjid",
          CategoryId: 2,
        },
        {
          name: "Cafe",
          CategoryId: 3,
        },
        {
          name: "Bar",
          CategoryId: 3,
        },
        {
          name: "Restoran",
          CategoryId: 3,
        },
        {
          name: "Restoran Cepat Saji",
          CategoryId: 3,
        },
        {
          name: "Restoran Tradisional",
          CategoryId: 3,
        },
        {
          name: "Bandara",
          CategoryId: 4,
        },
        {
          name: "Stasiun",
          CategoryId: 4,
        },
        {
          name: "Pelabuhan",
          CategoryId: 4,
        },
        {
          name: "Terminal",
          CategoryId: 4,
        },
        {
          name: "Bioskop",
          CategoryId: 5,
        },
        {
          name: "Karaoke",
          CategoryId: 5,
        },
        {
          name: "Club",
          CategoryId: 5,
        },
        {
          name: "Teater",
          CategoryId: 5,
        },
        {
          name: "Aula",
          CategoryId: 5,
        },
        {
          name: "Ruang Pameran",
          CategoryId: 5,
        },
        {
          name: "Museum",
          CategoryId: 5,
        },
        {
          name: "Galeri Seni",
          CategoryId: 5,
        },
        {
          name: "Perpustakaan",
          CategoryId: 5,
        },
        {
          name: "Tempat Wisata",
          CategoryId: 5,
        },
        {
          name: "Taman Publik",
          CategoryId: 5,
        },
        {
          name: "Stadium",
          CategoryId: 6,
        },
        {
          name: "Gelanggang Olahraga",
          CategoryId: 6,
        },
        {
          name: "Pusat Kebugaran",
          CategoryId: 6,
        },
        {
          name: "Golf",
          CategoryId: 6,
        },
        {
          name: "Salon",
          CategoryId: 7,
        },
        {
          name: "Spa",
          CategoryId: 7,
        },
        {
          name: "Massage",
          CategoryId: 7,
        },
        {
          name: "Department Store",
          CategoryId: 8,
        },
        {
          name: "Mall",
          CategoryId: 8,
        },
        {
          name: "Supermarket",
          CategoryId: 8,
        },
        {
          name: "Minimarket",
          CategoryId: 8,
        },
        {
          name: "Pasar Tradisional",
          CategoryId: 8,
        },
        {
          name: "Warung",
          CategoryId: 8,
        },
        {
          name: "Toko Ritel",
          CategoryId: 8,
        },
        {
          name: "Bank",
          CategoryId: 9,
        },
        {
          name: "Gedung Perkantoran Swasta",
          CategoryId: 9,
        },
        {
          name: "Kantor BUMN",
          CategoryId: 9,
        },
        {
          name: "Kantor Instansi Pemerintah",
          CategoryId: 9,
        },
        {
          name: "Kantor Polisi",
          CategoryId: 9,
        },
        {
          name: "Kantor TNI",
          CategoryId: 9,
        },
        {
          name: "Pabrik / Refinery / Pembangkit",
          CategoryId: 10,
        },
        {
          name: "Non-IOMKI",
          CategoryId: 10,
        },
        {
          name: "Sentra Logistik atau Distribusi",
          CategoryId: 10,
        },
        {
          name: "Area Konstruksi",
          CategoryId: 10,
        },
        {
          name: "Pergudangan",
          CategoryId: 10,
        },
        {
          name: "Otomotif (Bengkel, Showroom)",
          CategoryId: 10,
        },
        {
          name: "Sekolah",
          CategoryId: 11,
        },
        {
          name: "Universitas / Sekolah Tinggi",
          CategoryId: 11,
        },
        {
          name: "Lembaga Kursus",
          CategoryId: 11,
        },
        {
          name: "Gedung Apartemen",
          CategoryId: 12,
        },
        {
          name: "Hotel",
          CategoryId: 12,
        },
        {
          name: "Kompleks Perumahan",
          CategoryId: 12,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("SubCategories", null, {});
  },
};
