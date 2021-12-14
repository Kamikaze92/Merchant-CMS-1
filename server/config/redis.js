const Redis = require("ioredis");
const url = process.env.REDIS_URL;

const redis = new Redis();

module.exports = redis;