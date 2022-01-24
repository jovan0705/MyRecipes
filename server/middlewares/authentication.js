const { convertToken } = require("../helpers/jwt");
const {User} = require("../models/index")

const userAuthentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = convertToken(access_token);
    const user = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });
    if (!user) {
      throw { name: "userNotFound" };
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;
