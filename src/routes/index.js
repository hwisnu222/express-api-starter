const express = require("express"),
  router = express.Router(),
  responses = require("../middlewares/responses");

// controllers
const { index } = require("../controllers/v1/index.js");
const { register } = require("../controllers/v1/authentication/register");
const { login } = require("../controllers/v1/authentication/login");

// authentication
const { authentication } = require("../middlewares/authentication");

router
  .use(responses, authentication)
  .get("/", index)
  .post("/register", register)
  .post("/login", login);

module.exports = router;
