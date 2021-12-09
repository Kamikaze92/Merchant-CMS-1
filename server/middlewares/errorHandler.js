const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = 'Internal server error';

  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === 'not_authenticated') {
    code = 401;
    msg = 'Login first';
  } else if (err.name === 'JsonWebTokenError' || err.name === 'invalid_token') {
    code = 401;
    msg = 'Invalid token';
  } else if (err.name === 'invalid_user') {
    code = 401;
    msg = 'Invalid email/password';
  } else if (err.name === 'privilege_not_found') {
    code = 404;
    msg = 'Privilege not found';
  } else if (err.name === 'role_not_found') {
    code = 404;
    msg = 'Role not found';
  } else if (err.name === 'user_not_found') {
    code = 404;
    msg = 'User not found';
  } else if (err.name === 'email_not_found') {
    code = 404;
    msg = 'Email not found';
  } else if (err.name === 'verificator_not_found') {
    code = 404;
    msg = 'Verificator not found';
  } else if (err.name === 'userGroup_not_found') {
    code = 404;
    msg = 'User group not found';
  } else if (err.name === 'password_not_found') {
    code = 404;
    msg = 'Password not found';
  }

  res.status(code).json({
    message: msg,
  });
};

module.exports = errorHandler;
