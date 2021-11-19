const bcryt = require("bcrypt");
module.exports = (password, old_password) => {
  return new Promise((resolve, reject) => {
    const compareHash = await bcrypt.compare(password, login.password);
    if (!compareHash) {
      resolve({
        error: true,
        valid: false,
        message: "user or password wrong",
      });
    }
    resolve({
      error: false,
      valid: true,
      message: "password is same",
    });
  });
};
