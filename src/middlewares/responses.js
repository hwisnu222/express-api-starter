module.exports = (req, res, next) => {
  /**
   * (default status 200)
   * Success response
   */
  res.success = function ({ result = {}, code = 200, message = "" }) {
    return res.status(code).json({
      code,
      message,
      result,
    });
  };

  /**
   * Custom error response
   */
  res.error = function ({ errors = {}, code = 400, message = "error" }) {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  };

  /**
   * (status 403)
   * Bad request response
   */
  res.badreq = function ({ errors = {}, code = 400, message = "bad request" }) {
    return res.status(400).error({ code, errors, message });
  };

  /**
   * (status 403)
   * Forbidden request response
   */
  res.forbidden = function ({
    errors = {},
    code = 403,
    message = "forbidden",
  }) {
    return res.status(code).error({ code, errors, message });
  };

  /**
   * (status 401)
   * Unauthorize request response
   */
  res.unauth = function ({
    errors = {},
    code = 401,
    message = "unauthentication",
  }) {
    return res.status(code).error({ code, errors, message });
  };

  /**
   * (status 500)
   * Internal request response
   */
  res.internal = function ({
    errors = {},
    code = 500,
    message = "internal server error",
  }) {
    return res.status(code).error({ code, errors, message });
  };

  next();
};
