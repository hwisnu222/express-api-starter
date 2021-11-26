const jwt = require("jsonwebtoken"),
  config = require("../../../config/key.json");

module.exports = (token) => {
  try {
    const SECRET_KEY = config.privateKey;
    const verify = jwt.verify(token, SECRET_KEY);
    return { error: false, value: verify };
  } catch (err) {
    return { error: true, value: null, message: err };
  }
};
