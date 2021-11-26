const jwt = require("jsonwebtoken"),
  config = require("../../../config/key.json");

module.exports = (id) => {
  const KEY = config.privateKey;
  const token = jwt.sign({ id }, KEY, { expiresIn: "1h" });
  return token;
};
