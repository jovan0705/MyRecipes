const { User, UserFollow } = require("../models/index");
const { decryptPassword, hashPassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");

const userRegister = async (req, res, next) => {
  // console.log('do user register');
  try {
    const { name, username, email, password } = req.body;

    const newUser = await User.create({
      name,
      username,
      email,
      password,
      role: "user",
    });
    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    next(err);
  }
};

const adminRegister = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    const newUser = await User.create({
      name,
      username,
      email,
      password,
      role: "admin",
    });
    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    next(err);
  }
};

const doLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw { name: "badRequest" };
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw { name: "wrongLogin" };
    }

    const isValid = decryptPassword(password, user.password);
    if (!isValid) {
      throw { name: "wrongLogin" };
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = getToken(payload);
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

const editProfile = async (req, res, next) => {
  try {
    const userId = req.params.id;
    let { name, description, password } = req.body;
    const profilePict = req.additionalData;
    let changePassword = false;

    if (password) {
      if (password.length > 1) {
        password = hashPassword(password);
        changePassword = true;
      }
    }

    let profileData;
    if (changePassword === true) {
      profileData = await User.update(
        {
          name,
          description,
          profilePict,
          password,
        },
        {
          where: { id: userId },
          returning: true,
        }
      );
    } else {
      profileData = await User.update(
        {
          name,
          description,
          profilePict,
        },
        {
          where: { id: userId },
          returning: true,
        }
      );
    }

    const result = profileData[1][0];

    res.status(200).json({
      id: result.id,
      name: result.name,
      description: result.description,
      profilePict: result.profilePict,
    });
  } catch (err) {
    next(err);
  }
};

const doFollows = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { targetId } = req.body;
    // console.log(userId, targetId, '<----');
    if (userId === +targetId) {
      throw { name: "followsIdError" };
    }
    const isDuplicate = await UserFollow.findOne({
      where: {
        followerId: userId,
        followingId: targetId,
      },
    });
    if (isDuplicate) {
      throw { name: "followsDuplicate" };
    }
    const followsData = await UserFollow.create({
      followerId: userId,
      followingId: targetId,
    });
    res.status(201).json(followsData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userRegister,
  adminRegister,
  doLogin,
  editProfile,
  doFollows,
};
