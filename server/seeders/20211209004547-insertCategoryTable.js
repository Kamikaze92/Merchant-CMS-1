"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Fasilitas Kesehatan",
          description: "Untuk fasilitas kesehatan",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Tempat Ibadah",
          description: "Untuk tempat ibadah",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Makanan & Minuman",
          description: "Untuk restoran dan lain-lain",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sarana Transportasi",
          description: "Untuk sarana transportasi",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sarana Hiburan",
          description: "Untuk sarana hiburan",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sarana Olahraga",
          description: "Untuk sarana olahraga",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kecantikan & Relaksasi",
          description: "Untuk kecantikan dan relaksasi",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Perbelanjaan",
          description: "Untuk perbelanjaan",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Perkantoran",
          description: "Untuk perkantoran",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Industri",
          description: "Untuk industri",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Institusi Pendidikan",
          description: "Untuk institusi pendidikan",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Akomodasi",
          description: "Untuk akomodasi",
          is_tenant_category: false,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Restoran",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Restoran Cepat Saji",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Cafe",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Minimarket",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Supermarket",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bioskop",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Karaoke",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pusat Kebugaran",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Salon",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Spa",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Toko Ritel",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bank",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Wahana Tempat Wisata",
          description: "",
          is_tenant_category: true,
          parent_id: null,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Apotek",
          description: "",
           parent_id: 1,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Rumah Sakit",
          description: "",
           parent_id: 1,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Klinik",
          description: "",
           parent_id: 1,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Laboratorium",
          description: "",
           parent_id: 1,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Puskesmas",
          description: "",
           parent_id: 1,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gereja Katolik",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gereja Kristen",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Klenteng",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pura",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Vihara",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Masjid",
          description: "",
           parent_id: 2,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Cafe",
          description: "",
           parent_id: 3,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bar",
          description: "",
           parent_id: 3,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Restoran",
          description: "",
           parent_id: 3,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Restoran Cepat Saji",
          description: "",
           parent_id: 3,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Restoran Tradisional",
          description: "",
           parent_id: 3,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bandara",
          description: "",
           parent_id: 4,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Stasiun",
          description: "",
           parent_id: 4,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pelabuhan",
          description: "",
           parent_id: 4,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Terminal",
          description: "",
           parent_id: 4,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bioskop",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Karaoke",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Club",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Teater",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Aula",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ruang Pameran",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Museum",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Galeri Seni",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Perpustakaan",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Tempat Wisata",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Taman Publik",
          description: "",
           parent_id: 5,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Stadium",
          description: "",
           parent_id: 6,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gelanggang Olahraga",
          description: "",
           parent_id: 6,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pusat Kebugaran",
          description: "",
           parent_id: 6,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Golf",
          description: "",
           parent_id: 6,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Salon",
          description: "",
           parent_id: 7,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Spa",
          description: "",
           parent_id: 7,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Massage",
          description: "",
           parent_id: 7,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Department Store",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mall",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Supermarket",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Minimarket",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pasar Tradisional",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Warung",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Toko Ritel",
          description: "",
           parent_id: 8,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bank",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gedung Perkantoran Swasta",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kantor BUMN",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kantor Instansi Pemerintah",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kantor Polisi",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kantor TNI",
          description: "",
           parent_id: 9,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pabrik / Refinery / Pembangkit",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Non-IOMKI",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sentra Logistik atau Distribusi",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Area Konstruksi",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pergudangan",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Otomotif (Bengkel, Showroom)",
          description: "",
          parent_id: 10,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sekolah",
          description: "",
          parent_id: 11,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Universitas / Sekolah Tinggi",
          description: "",
          parent_id: 11,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lembaga Kursus",
          description: "",
          parent_id: 11,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gedung Apartemen",
          description: "",
          parent_id: 12,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Hotel",
          description: "",
          parent_id: 12,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kompleks Perumahan",
          description: "",
          parent_id: 12,
          deleted_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", false, {});
  },
};
