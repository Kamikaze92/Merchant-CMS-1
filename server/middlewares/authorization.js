const { User } = require;

async function AuthorizeAdmin(req, res, next) {
  try {
    const id = req.user.id || req.params.id;
    const response = await User.findByPk(id);
    if (!response) {
      throw { name: "user_not_found" };
    }
    if (req.user.role === "Admin") {
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function AuthorizeVerificatorProvince(req, res, next) {
  try {
    const id = req.user.id || req.params.id;
    const response = await User.findByPk(id);
    if (!response) {
      throw { name: "user_not_found" };
    }
    if (req.user.role === "Verificator Province" || req.user.role === "Admin") {
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function AuthorizeVerificatorDisctrict(req, res, next) {
  try {
    const id = req.user.id || req.params.id;
    const response = await User.findByPk(id);
    if (!response) {
      throw { name: "user_not_found" };
    }
    if (
      req.user.role === "Verificator Kab/Kota" ||    // nama masih belum tau
      req.user.role === "Verificator Province" ||
      req.user.role === "Admin"
    ) {
     
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}
