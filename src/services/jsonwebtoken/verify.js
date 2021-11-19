const jwt = require("jsonwebtoken");

module.exports = (token) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    const verify = jwt.verify(token, SECRET_KEY);
    return { error: false, value: verify };
  } catch (err) {
    return { error: true, value: null, message: err };
  }
};
