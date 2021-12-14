
const { User, Role, Verificator, sequelize, History, Category, Verifier, Merchant, City } = require("../models");

  // create user
const createUser = async (payload) => {
  const t = await sequelize.transaction();
  try {
    const {
      user_type, // This is FLAG to identify user is Merchant or verifier.
      full_name,
      email,
      phone_number,
      category_id,
      tenant_category_id,
      parent_id,
      place_name,
      institution,
      address,
      postal_code,
      province_id,
      city_id,
      created_by,
    } = payload;
    
    if (user_type !== 'Merchant' && user_type !== 'Verifier' ) {
      throw {
        name: 'errorUserType',
        mgs: 'user type should be "Merchant" or "Verifier"',
      }
    }

    let verifierTransaction = null;
    if (user_type === 'Verifier') {
      verifierTransaction = await Verifier.create({
        institution,
        province_id,
        city_id,
        created_by,
      }, { transaction: t });
    };

    const userTransaction = await User.create({
      full_name,
      email,
      phone_number,
      password: 'random',
      created_by,
      verifier_id: verifierTransaction?.id || null,
    }, { transaction: t });

    if (user_type === 'Merchant') {
      await Merchant.create({
        user_id: userTransaction.id,
        institution,
        address,
        province_id,
        city_id,
        place_name,
        category_id,
        postal_code,
        tenant_category_id,
        parent_id,
        created_by,
      }, { transaction: t });
    }
    await t.commit();
    console.log("Sucess Seed");
  } catch (error) {
    await t.rollback();
    console.log(error);
    console.log("Error: rollback");
  }
}

const merchantNonTenant = [
  {
    full_name: 'Merchant Non Tenant 1',
    password: 'random',
    email: 'merchnt1@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: 1,
    tenant_category_id: null, // tenant category
    parent_id: null, // only if tenant_category_id
    place_name: 'Merchant NT1',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Non Tenant 2',
    password: 'random',
    email: 'merchnt2@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: 2,
    tenant_category_id: null, // tenant category
    parent_id: null, // only if tenant_category_id
    place_name: 'Merchant NT2',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Non Tenant 3',
    password: 'random',
    email: 'merchnt3@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: 1,
    tenant_category_id: null, // tenant category
    parent_id: null, // only if tenant_category_id
    place_name: 'Merchant NT3',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Non Tenant 4',
    password: 'random',
    email: 'merchnt4@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: 1,
    tenant_category_id: null, // tenant category
    parent_id: null, // only if tenant_category_id
    place_name: 'Merchant NT4',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 2,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Non Tenant 5',
    password: 'random',
    email: 'merchnt5@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: 1,
    tenant_category_id: null, // tenant category
    parent_id: null, // only if tenant_category_id
    place_name: 'Merchant NT5',
    institution: 'MNT', // pengampu
    address: 'Jakarta',
    province_id: 2,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  }
];

merchantNonTenant.forEach(el => { 
  createUser(el);
});

const merchantTenant = [
  {
    full_name: 'Merchant Tenant 1',
    password: 'random',
    email: 'merchtn1@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: null,
    tenant_category_id: 1, // tenant category
    parent_id: 1, // only if tenant_category_id
    place_name: 'Merchant NT1',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Tenant 2',
    password: 'random',
    email: 'merchtn2@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: null,
    tenant_category_id: 1, // tenant category
    parent_id: 1, // only if tenant_category_id
    place_name: 'Merchant NT2',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Tenant 3',
    password: 'random',
    email: 'merchntn3@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: null,
    tenant_category_id: 1, // tenant category
    parent_id: 1, // only if tenant_category_id
    place_name: 'Merchant NT3',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Tenant 4',
    password: 'random',
    email: 'merchntn4@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: null,
    tenant_category_id: 1, // tenant category
    parent_id: 1, // only if tenant_category_id
    place_name: 'Merchant NT4',
    institution: 'MNT', // pengampu
    address: 'Bandung',
    province_id: 1,
    city_id: 2,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  },
  {
    full_name: 'Merchant Tenant 5',
    password: 'random',
    email: 'merchntn5@mail.com',
    phone_number: '62899999999',
    // should chose one category_id or tenant_category_id
    category_id: null,
    tenant_category_id: 2, // tenant category
    parent_id: 2, // only if tenant_category_id
    place_name: 'Merchant NT5',
    institution: 'MNT', // pengampu
    address: 'Jakarta',
    province_id: 2,
    city_id: 1,
    postal_code: '12345',
    created_by: 1,
    user_type: 'Merchant', // Merchant or Verifier
  }
];

merchantTenant.forEach(el => { 
  createUser(el);
});

const VerifierProv = [
  {
    full_name: 'Verifier Provinsi 1',
    password: 'random',
    email: 'verifierprov1@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 1,
    city_id: null,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
  {
    full_name: 'Verifier Provinsi 2',
    password: 'random',
    email: 'verifierprov2@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 2,
    city_id: null,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
];

VerifierProv.forEach(el => { 
  createUser(el);
});

const VerifierCity = [
  {
    full_name: 'Verifier Kota 1',
    password: 'random',
    email: 'verifiercity1@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 1,
    city_id: 1,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
  {
    full_name: 'Verifier Kota 2',
    password: 'random',
    email: 'verifiercity2@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 1,
    city_id: 2,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
  {
    full_name: 'Verifier Kota 3',
    password: 'random',
    email: 'verifiercity3@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 1,
    city_id: 3,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
  {
    full_name: 'Verifier Kota 4',
    password: 'random',
    email: 'verifiercity4@mail.com',
    phone_number: '62899999999',
    institution: 'MNT', // pengampu
    province_id: 2,
    city_id: 1,
    created_by: 1,
    user_type: 'Verifier', // Merchant or Verifier
  },
];

VerifierCity.forEach(el => { 
  createUser(el);
});