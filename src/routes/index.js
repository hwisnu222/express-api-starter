const express = require("express"),
  router = express.Router(),
  fs = require("fs"),
  path = require("path");

// insexing all routes file
let routes = [];
// eslint-disable-line
fs.readdirSync(__dirname).forEach((file) => {
  const pathFile = path.join(__dirname, file);
  if (pathFile !== __filename) {
    routes.push(require(pathFile));
  }
});

router.use(routes);

module.exports = router;
