const { verifyData } = require('../helpers/jwt');
const { User, Verifier } = require('../models');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) throw { name: 'not_authenticated' };
    const payload = verifyData(access_token);
    const user = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email
      },
      include: [
        {
          model: Verifier,
          as: 'verifier',
          require: false,
        },
        // {
        //   model: Role,
        //   require: true,
        // }
      ]
    });
    if (!user) throw { name: 'invalid_token' };

    // better inject all for future needs.
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
