const { verifyData } = require('../helpers/jwt');
const { User } = require('../models/index');

const verifyMiddleware = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const payload = verifyData(token);
    if (!payload) {
      throw { name: 'invalid_token' };
    }
    const response = await User.findOne({
      where: { id, email: payload.email },
    });
    if (!response) {
      throw { name: 'email_not_found' };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { verifyMiddleware };
