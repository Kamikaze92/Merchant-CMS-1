const request = require('supertest');
const app = require('../app');
const { Category, User } = require('../models');
const { getSalt, comparePassword } = require('../helpers/bcrypt');
const redis = require('../config/redis');

beforeAll(async (done) => {
  try {
    const userz = await User.create({
      full_name: 'Admin',
      email: 'admin2@fakemail.com',
      password: '123456',
      phone_number: '6289999999999',
      verified_at: new Date(),
      approved_by: 1,
      approved_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    });
    done();
  } catch (error) {
    console.log(error);
    done(error);
  }
  
});

afterAll(async (done) => {
  await Category.sync({ force: true });
  await User.sync({ force: true });
  await redis.quit();
  done()
});

describe('Test API for Categories', () => {
  redis.disconnect()
  test.only('ADMIN POST 201', async (done) => {
    try {
      const userd = {
        email: 'admin2@fakemail.com',
        password: '123456',
      };
      const res = await request(app)
      .post('/login')
      .send(userd);
      console.log(res.body, 'ini boddy');
      const response = await request(app)
        .post('/categories')
        .send({
          name: 'Test category Tenant',
          description: 'Test category Tenant',
        })
        .set('access_token', res.body.access_token);
      console.log(response.status, 'sttus response');
      expect(response.status).toBe(200);
      done()
    } catch (error) {
      done(error)
    }
  });
});