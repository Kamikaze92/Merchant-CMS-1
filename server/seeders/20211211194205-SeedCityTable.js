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
        //! NAD
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

        //!BALI
        {
          name: 'Kabupaten Badung',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bangli',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buleleng',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gianyar',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jembrana',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Karangasem',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Klungkung',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tabanan',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Denpasar',
          province_id: Bali?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!BABEL
        {
          name: 'Kabupaten Bangka',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bangka Barat',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bangka Selatan',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bangka Tengah',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Belitung',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Belitung Timur',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pangkal Pinang',
          province_id: BangkaBelitung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!BANTEN
        {
          name: 'Kabupaten Lebak',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pandeglang',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Serang',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tangerang',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Cilegon',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Serang',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tangerang',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tangerang Selatan',
          province_id: Banten?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!Bengkulu
        {
          name: 'Kabupaten Bengkulu Selatan',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bengkulu Tengah',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bengkulu Utara',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kaur',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepahiang',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lebong',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mukomuko',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Rejang Lebong',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Seluma',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bengkulu',
          province_id: Bengkulu?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        
        //! JATENG
        {
          name: 'Kabupaten Banjarnegara',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Banyumas',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Batang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Blora',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Boyolali',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Brebes',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Cilacap',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Demak',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Grobogan',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jepara',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Karanganyar',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kebumen',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kendal',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Klaten',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kudus',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Magelang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pati',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pekalongan',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pemalang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Purbalingga',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Purworejo',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Rembang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Semarang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sragen',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sukoharjo',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tegal',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Temanggung',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Wonogiri',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Wonosobo',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pekalongan',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Salatiga',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Semarang',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Surakarta',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tegal',
          province_id: JawaTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! KalimantanTengah
        {
          name: 'Kabupaten Barito Selatan',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Barito Timur',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Barito Utara',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gunung Mas',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kapuas',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Katingan',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kotawaringin Barat',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kotawaringin Timur',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lamandau',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Murung Raya',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pulang Pisau',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sukamara',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Seruyan',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Palangka Raya',
          province_id: KalimantanTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! SulawesiTengah

        {
          name: 'Kabupaten Banggai',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Banggai Kepulauan',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Laut',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Buol',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Donggala',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Morowali',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Morowali Utara',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Parigi Moutong',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Poso',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Sigi',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Tojo Una-Una',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kabupaten Toli-Toli',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Kota Palu',
          province_id: SulawesiTengah?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!JAWATIMUR

        {
          name: 'Kabupaten Bangkalan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Banyuwangi',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Blitar',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bojonegoro',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bondowoso',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gresik',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jember',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jombang',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kediri',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lamongan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lumajang',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Madiun',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Magetan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Malang',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mojokerto',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nganjuk',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ngawi',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pacitan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pamekasan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pasuruan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ponorogo',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Probolinggo',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sampang',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sidoarjo',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Situbondo',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumenep',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Trenggalek',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tuban',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tulungagung',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Batu',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Blitar',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Kediri',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Madiun',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Malang',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Mojokerto',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pasuruan',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Probolinggo',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Surabaya',
          province_id: Jawatimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! KalimantanTimur

        {
          name: 'Kabupaten Berau',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kutai Barat',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kutai Kartanegara',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kutai Timur',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mahakam Ulu',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Paser',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Penajam Paser Utara',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Balikpapan',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bontang',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Samarinda',
          province_id: KalimantanTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!NTT
        {
          name: 'Kabupaten Alor',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Belu',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ende',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Flores Timur',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kupang',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lembata',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Malaka',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Manggarai',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Manggarai Barat',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Manggarai Timur',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ngada',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nagekeo',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Rote Ndao',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sabu Raijua',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sikka',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumba Barat',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumba Barat Daya',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumba Tengah',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumba Timur',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Timor Tengah Selatan',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Timor Tengah Utara',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Kupang ',
          province_id: NusaTenggaraTimur?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!Gorontalo
        {
          name: 'Kabupaten Boalemo',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bone Bolango',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gorontalo',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gorontalo Utara',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pohuwato',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Gorontalo',
          province_id: Gorontalo?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! DKI
        {
          name: 'Kota Administrasi Jakarta Barat',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Administrasi Jakarta Pusat',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Administrasi Jakarta Selatan',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Administrasi Jakarta Timur',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Administrasi Jakarta Utara',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Administrasi Kepulauan Seribu',
          province_id: DaerahKhususIbukotaJakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! Jambi
        {
          name: 'Kabupaten Batanghari',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bungo',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kerinci',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Merangin',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Muaro Jambi',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sarolangun',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanjung Jabung Barat',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanjung Jabung Timur',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tebo',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Jambi',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Sungai Penuh',
          province_id: Jambi?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!lampung
        {
          name: 'Kabupaten Lampung Tengah',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lampung Utara',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lampung Selatan',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lampung Barat',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lampung Timur',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lampung Tengah',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mesuji',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mesuji',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pesawaran',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pesisir Barat',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pringsewu',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tulang Bawang',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tulang Bawang Barat',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanggamus',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Way Kanan',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bandar Lampung',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Metro',
          province_id: Lampung?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! Maluku
        {
          name: 'Kabupaten Buru',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buru Selatan',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Aru',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maluku Barat Daya',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maluku Tengah',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maluku Tenggara',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maluku Tenggara Barat',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Seram Bagian Barat',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Seram Bagian Timur',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Ambon',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tual',
          province_id: Maluku?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!sulawesiutara
        {
          name: 'Kabupaten Bolaang Mongondow',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bolaang Mongondow Selatan',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bolaang Mongondow Timur',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bolaang Mongondow Utara',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Sangihe',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepualuan Siau Tagulandang Biaro',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Talaud',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Minahasa',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Minahasa Selatan',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Minahasa Tenggara',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Minahasa Utara',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bitung',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota KotaMobagu',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },{
          name: 'Kota Manado',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tomohon',
          province_id: SulawesiUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! SUMUT
        {
          name: 'Kabupaten Asahan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Batubara',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Dairi',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Deli Serdang',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Humbang Hasundutan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Karo',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Labuhanbatu',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Labuhanbatu Selatan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Labuhanbatu Utara',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Langkat',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mandailing Natal',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nias',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nias Barat',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nias Selatan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nias Utara',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Padang Lawas',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Padang Lawas Utara',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pakpak Bharat',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Samosir',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Serdang Bedagai',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Simalungun',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tapanuli Selatan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tapanuli Tengah',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tapanuli Utara',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Toba Samosir',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Binjai',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Gunungsitoli',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Medan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Padangsidempuan',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pematangsiantar',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Sibolga',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tanjungbalai',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tebing Tinggi',
          province_id: SumateraUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! Papua
        {
          name: 'Kabupaten Asmat',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Biak Numfor',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Boven Digoel',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Deiyai',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Dogiyai',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Intan Jaya',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jayapura',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jayawijaya',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Keerom',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Yapen',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lanny Jaya',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamberamo Raya',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamberamo Tengah',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mappi',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Merauke',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mimika',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nabire',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nduga',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Paniai',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pegunungan Bintang',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Puncak',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Puncak Jaya',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sarmi',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Supiori',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tolikara',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Waropen',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Yahukimo',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Yalimo',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Jayapura',
          province_id: Papua?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! Riau
        {
          name: 'Kabupaten Bengkalis',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Indragiri Hilir',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Indragiri Hulu',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kampar',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Meranti',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kuantan Singingi',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pelalawan',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Rokan Hilir',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Rokan Hulu',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Siak',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Dumai',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pekanbaru',
          province_id: Riau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //!Kepulauan Riau
        {
          name: 'Kabupaten Bintan',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Karimun',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Anambas',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lingga',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Natuna',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Batam',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tanjung Pinang',
          province_id: KepulauanRiau?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! sultra
        {
          name: 'Kabupaten Bombana',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buton',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buton Selatan',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buton Tengah',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Buton Utara',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kolaka',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kolaka Timur',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kolaka Utara',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Konawe',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Konawe Kepulauan',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Konawe Selatan',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Konawe Utara',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Muna',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Muna Barat',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Wakatobi',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bau-Bau',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Kendari',
          province_id: SulawesiTenggara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!kalsel

        {
          name: 'Kabupaten Balangan',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Banjar',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Barito Kuala',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Hulu Sungai Selatan',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Hulu Sungai Tengah',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Hulu Sungai Utara',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kotabaru',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tabalong',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanah Bumbu',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanah Laut',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tapin',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Banjarbaru',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Banjarmasin',
          province_id: KalimantanSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!SULSEL
        {
          name: 'Kabupaten Bantaeng',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Barru',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bone',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bulukumba',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Enrekang',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Gowa',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Jeneponto',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Selayar',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Luwu',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Luwu Timur',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Luwu Utara',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maros',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pangkajene dan Kepulauan',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pinrang',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sidenreng Rappang',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sinjai',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Soppeng',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Takalar',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tana Toraja',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Toraja Utara',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Wajo',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Makassar',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Palopo',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Parepare',
          province_id: SulawesiSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! SumateraSelatan
        {
          name: 'Kabupaten Banyuasin',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Empat Lawang',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lahat',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Muara Enim',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Musi Banyuasin',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Musi Rawas',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Musi Rawas Utara',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ogan Ilir',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ogan Komering Ilir',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ogan Komering Ulu',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ogan Komering Ulu Selatan',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ogan Komering Ulu Timur',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Penikal Abab Lematang Ilir',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota LubukLinggau',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pagar Alam',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Palembang',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },{
          name: 'Kota PrabuMulih',
          province_id: SumateraSelatan?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },


        //! jawa barat
        {
          name: 'Kabupaten Bandung',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bandung Barat',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bekasi',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Bogor',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ciamis',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Cianjur',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Cirebon',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Garut',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Indramayu',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Karawang',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kuningan',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Majalengka',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pangandaran',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Purwakarta',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Subang',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sukabumi',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumedang',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tasikmalaya',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bandung',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Banjar',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bekasi',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bogor',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Cimahi',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Cirebon',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Depok',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Sukabumi',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tasikmalaya',
          province_id: JawaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!kalbar
        {
          name: 'Kabupaten Bengkayang',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kapuas Hulu',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kayong Utara',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Ketapang',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kubu Raya',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Landak',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Melawi',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mempawah',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sambas',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sanggau',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sekadau',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sintang',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pontianak',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Singkawang',
          province_id: KalimantanBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! NTB
        {
          name: 'Kabupaten Bima',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Dompu',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lombok Barat',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lombok Tengah',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lombok Timur',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lombok Utara',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumbawa',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sumbawa Barat',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bima',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Mataram',
          province_id: NusatenggaraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!papuabarat

        {
          name: 'Kabupaten Fakfak',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kaimana',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Manokmwari',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Manokwari Selatan',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Maybrat',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pegunungan Arfak',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Raja Ampat',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sorong',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sorong Selatan',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tambrauw',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Teluk Bintuni',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Teluk Wondama',
          province_id: PapuaBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!sulawesibarat
        {
          name: 'Kabupaten Majene',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamasa',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamuju',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamuju Tengah',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Mamuju Utara',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Polewali Mandar',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Mamuju',
          province_id: SulawesiBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //! SumateraBarat
        {
          name: 'Kabupaten Agam',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Dharmasraya',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Mentawai',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Lima Puluh Kota',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Padang Pariaman',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pasanman',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pasaman Barat',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pesisir Selatan',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sijunjung',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Solok',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Solok Selatan',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tanah Datar',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Bukittinggi',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Padang',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Padangpanjang',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Pariaman',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Payakumbuh',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Sawahlunto',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Solok',
          province_id: SumateraBarat?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!DIY

        {
          name: 'Kabupaten Bantul',
          province_id: DaerahIstimewaYogyakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten GunungKidul',
          province_id: DaerahIstimewaYogyakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kulon Progo',
          province_id: DaerahIstimewaYogyakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Sleman',
          province_id: DaerahIstimewaYogyakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Yogyakarta',
          province_id: DaerahIstimewaYogyakarta?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!kalimantan utara
        {
          name: 'Kabupaten Bulungan',
          province_id: KalimantanUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Malinau',
          province_id: KalimantanUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Nunukan',
          province_id: KalimantanUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Tana Tidung',
          province_id: KalimantanUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tarakan',
          province_id: KalimantanUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },

        //!maluku utara
        {
          name: 'Kabupaten Halmahera Barat',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Halmahera Tengah',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Halmahera Utara',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Halmahera Selatan',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Kepulauan Sula',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Halmahera Timur',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pulau Morotai',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kabupaten Pulau Taliabu',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Ternate',
          province_id: MalukuUtara?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Kota Tidore Kepulauan',
          province_id: MalukuUtara?.id,
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
