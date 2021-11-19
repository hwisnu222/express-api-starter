const { User } = require("../../models");
const verfiyToken = require("../services/jsonwebtoken/verify");

exports.authentication = async (req, res, next) => {
  // validate token is exist or not
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  ) {
    return res.unauth({});
  }
  try {
    /**
     * verifyToken()
     * @param {functions} return object {error,value, message}
     */
    const idUser = verfiyToken(token);
    // validate user
    const user = User.findOne({ where: { id: idUser.value.id } });
    if (!user) return res.unauth({});
    req.user = user.id;
    next();
  } catch (err) {
    return res.internal({ errors: err });
  }
};
