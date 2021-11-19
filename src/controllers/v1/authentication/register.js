const { User } = require("../../../../models"),
  Joi = require("joi");

// services
const hash = require("../../../services/bcrypt/hash");

const register = async (req, res) => {
  const { name, address, phone, email, password } = req.body;
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    address: Joi.string().min(5).required(),
    phone: Joi.number().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate({ name, phone, address, email, password });
  if (error)
    return res.error({
      errors: error.details[0].message,
      message: "bad request",
    });

  try {
    const { value } = await hash(password);
    const register = await User.create({
      name,
      address,
      phone,
      email,
      password: value,
    });
    if (!register) return res.error({ message: "failed register user" });
    return res.success({ message: "successfully register user" });
  } catch (err) {
    res.internal({ errors: err });
  }
};

module.exports = { register };
