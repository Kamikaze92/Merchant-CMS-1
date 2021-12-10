const request = require('supertest');
const { User } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await User.sync({ force: true });
  const userObject = {
    full_name: 'John Doe',
    email: 'test@mail.com',
    phone_number: '085299999999',
    password: '12345678',
    category_id: 1,
    tenant_category_id: 1,
    parent_id: 1,
    place_name: 'Resto A',
    institution: 'PHRI',
    address: 'Bandung',
    province_id: 1,
    city_id: 1,
    postal_code: '12345',
    created_at: new Date(),
    updated_at: new Date(),
  };
  await User.create(userObject);
});

describe('Tests merchant registrations', () => {
  test('Complete form given should respond success message with 201 status code', async () => {
    try {
      const user = {
        full_name: 'John Doe',
        email: 'testdiff@mail.com',
        phone_number: '085299999999',
        password: 'random',
        category_id: 1,
        tenant_category_id: 1,
        parent_id: 1,
        place_name: 'Resto B',
        institution: 'phri',
        address: 'Bandung',
        province_id: 1,
        city_id: 1,
        postal_code: '12345',
        created_at: new Date(),
        updated_at: new Date(),
      };
      const response = await request(app).post('/register').send(user);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: `Registration success, OTP was sent to ${user.email}.`,
      });
    } catch (error) {
      expect(error).toMatch('error');
    }
  });
});
