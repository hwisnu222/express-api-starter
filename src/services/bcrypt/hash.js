const bcrypt = require("bcrypt");
module.exports = (password) => {
  return new Promise(async (resolve, reject) => {
    const saltHashStrength = 10;
    const hash = await bcrypt.hash(password, saltHashStrength);
    resolve({
      error: false,
      valid: true,
      message: "password is hashed",
      value: hash,
    });
  });
};
