const { Province, City } = require("../models");
const redis = require("../config/redis");

module.exports = class ProvinceController {
  static async getProvince(req, res, next) {
    try {
      const provinces = await redis.get("provinces");
      if (provinces) {
        res.status(200).json(JSON.parse(provinces));
      } else {
        const response = await Province.findAll({
          include: City,
        });
        await redis.set("provinces", JSON.stringify(response));
        res.status(200).json(response);
      }
    } catch (error) {
      next(error);
    }
  }
};