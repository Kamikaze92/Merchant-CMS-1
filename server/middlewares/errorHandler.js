const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";
  console.log(err)
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "not_authenticated") {
    code = 401;
    msg = "Login first";
  } else if (err.name === "JsonWebTokenError" || err.name === "invalid_token") {
    code = 401;
    msg = "Invalid token";
  } else if (err.name === "invalid_user") {
    code = 401;
    msg = "Invalid email/password";
  } else if (err.name === "privilege_not_found") {
    code = 404;
    msg = "Privilege not found";
  } else if (err.name === "role_not_found") {
    code = 404;
    msg = "Role is not found";
  } else if (err.name === "user_not_found") {
    code = 404;
    msg = "User is not found";
  } else if (err.name === "email_not_found") {
    code = 404;
    msg = "Email is not found";
  } else if (err.name === "verificator_not_found") {
    code = 404;
    msg = "Verificator is not found";
  } else if (err.name === "userGroup_not_found") {
    code = 404;
    msg = "User group is not found";
  } else if (err.name === "password_not_found") {
    code = 404;
    msg = "Password is not found";
  } else if (err.name === "password_not_match") {
    code = 401;
    msg = "Password not match";
  } else if (err.name === "description_is_required") {
    code = 400;
    msg = "Description is required";
  } else if (err.name === "category_not_found") {
    code = 404;
    msg = "Category is not found";
  } else if (err.name === "sub_category_not_found") {
    code = 404;
    msg = "Sub Category is not found";
  } else if (err.name === "fail_create_history") {
    code = 401;
    msg = "Failed to create history";
  } else if (err.name === "forbidden") {
    code = 403;
    msg = "You are not allowed";
  } else if (err.name === "name_is_required") {
    code = 400;
    msg = "Name is required";
  } else if (err.name === "error_send_OTP") {
    code = 400;
    msg = "OTP was not sent successfully"
  } else if (err.name === "invalid_otp") {
    code = 400;
    msg = "OTP is not valid"
  } else if(err.name === 'NotAuthorized') {
    code = 403;
    msg = "Your not authorized"
  }

  res.status(code).json({
    message: msg,
  });
};

module.exports = errorHandler;
