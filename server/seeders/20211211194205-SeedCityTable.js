'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const provinces = await queryInterface.sequelize.query(
      `SELECT id, name FROM "Provinces";`
    );

    const Aceh = provinces[0].filter(e => e.name ==='Aceh')[0];
    const Bali = provinces[0].filter(e => e.name ==='Bali')[0];
    const BangkaBelitung = provinces[0].filter(e => e.name ==='Bangka Belitung')[0];
    const Banten = provinces[0].filter(e => e.name ==='Banten')[0];
    const Bengkulu = provinces[0].filter(e => e.name ==='Bengkulu')[0];
    const JawaTengah = provinces[0].filter(e => e.name ==='Jawa Tengah')[0];
    const KalimantanTengah = provinces[0].filter(e => e.name ==='Kalimantan Tengah')[0];
    const SulawesiTengah = provinces[0].filter(e => e.name ==='Sulawesi Tengah')[0];
    const Jawatimur = provinces[0].filter(e => e.name ==='Jawa timur')[0];
    const KalimantanTimur = provinces[0].filter(e => e.name ==='Kalimantan Timur')[0];
    const NusaTenggaraTimur = provinces[0].filter(e => e.name ==='Nusa Tenggara Timur')[0];
    const Gorontalo = provinces[0].filter(e => e.name ==='Gorontalo')[0];
    const DaerahKhususIbukotaJakarta = provinces[0].filter(e => e.name ==='Daerah Khusus Ibukota Jakarta')[0];
    const Jambi = provinces[0].filter(e => e.name ==='Jambi')[0];
    const Lampung = provinces[0].filter(e => e.name ==='Lampung')[0];
    const Maluku = provinces[0].filter(e => e.name ==='Maluku')[0];
    const SulawesiUtara = provinces[0].filter(e => e.name ==='Sulawesi Utara')[0];
    const SumateraUtara = provinces[0].filter(e => e.name ==='Sumatera Utara')[0];
    const Papua = provinces[0].filter(e => e.name ==='Papua')[0];
    const Riau = provinces[0].filter(e => e.name ==='Riau')[0];
    const KepulauanRiau = provinces[0].filter(e => e.name ==='Kepulauan Riau')[0];
    const SulawesiTenggara = provinces[0].filter(e => e.name ==='Sulawesi Tenggara')[0];
    const KalimantanSelatan = provinces[0].filter(e => e.name ==='Kalimantan Selatan')[0];
    const SulawesiSelatan = provinces[0].filter(e => e.name ==='Sulawesi Selatan')[0];
    const SumateraSelatan = provinces[0].filter(e => e.name ==='Sumatera Selatan')[0];
    const JawaBarat = provinces[0].filter(e => e.name ==='Jawa Barat')[0];
    const KalimantanBarat = provinces[0].filter(e => e.name ==='Kalimantan Barat')[0];
    const NusatenggaraBarat = provinces[0].filter(e => e.name ==='Nusa tenggara Barat')[0];
    const PapuaBarat = provinces[0].filter(e => e.name ==='Papua Barat')[0];
    const SulawesiBarat = provinces[0].filter(e => e.name ==='Sulawesi Barat')[0];
    const SumateraBarat = provinces[0].filter(e => e.name ==='Sumatera Barat')[0];
    const DaerahIstimewaYogyakarta = provinces[0].filter(e => e.name ==='Daerah Istimewa Yogyakarta')[0];
    const KalimantanUtara = provinces[0].filter(e => e.name ==='Kalimantan Utara')[0];
    const MalukuUtara = provinces[0].filter(e => e.name ==='Maluku Utara')[0];

    await queryInterface.bulkInsert(
      'Cities',
      [
        {
          name: 'Kabupaten Aceh Barat',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Barat Daya',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Besar',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Jaya',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Selatan',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Singkil',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Tamiang',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Tengah',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Tenggara',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Timur',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Aceh Utara',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bener Meriah',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bireuen',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gayo Lues',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nagan Raya',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pidie',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pidie Jaya',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Simeulue',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Banda Aceh',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Langsa',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Lhokseumawe',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Sabang',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Subulussalam',
          province_id: Aceh?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
