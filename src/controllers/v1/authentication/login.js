// import model below
const { User } = require("../../../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const login = async (req, res) => {
  const { email, password } = req.body;

  const schemaLogin = Joi.object({
    email: Joi.string().email().min(10).max(30).required(),
    password: Joi.string().min(6).max(50).required(),
  });

  const { error } = schemaLogin.validate({ email, password });

  if (error) return res.error({ error: error.details[0].message });

  try {
    const account = await User.findOne({
      where: { email: email },
      attributes: { exclude: ["created_at", "updated_at"] },
    });
    if (!account) return res.error({ message: "user is not exist" });

    const comparePassword = await bcrypt.compare(password, account.password);
    if (!comparePassword) return res.error({ message: "password is wrong" });

    const KEY = process.env.SECRET_KEY;
    const token = jwt.sign({ id: account.id }, KEY);
    return res.success({ result: { account, token } });
  } catch (err) {
    return res.internal({ errors: err });
  }
};

module.exports = { login };
