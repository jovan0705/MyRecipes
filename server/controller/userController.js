const {
  User,
  UserFollow,
  BalanceHistory,
  UserFavoritedRecipe,
} = require("../models/index");
const { decryptPassword, hashPassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const midtrans = require("../helpers/midtrans");
const { Op } = require("sequelize");

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
      balance: 0,
      profilePict: 'https://semantic-ui.com/images/avatar2/large/matthew.png'
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
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
      throw { name: "badRequest" };
    }

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });
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
    res.status(200).json({ accessToken, username: user.username });
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

    const user = await User.findByPk(userId);
    if (!user) {
      throw { name: "notFound" };
    }

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

const doUnfollow = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const followedUser = await UserFollow.findOne({
      where: { followingId: id, followerId: userId },
    });
    if (!followedUser) {
      throw { name: "notFound" };
    }

    await followedUser.destroy();
    res.status(200).json(followedUser);
  } catch (err) {
    next(err);
  }
};

const topUpBalance = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { amount } = req.body;
    const balanceHistory = await BalanceHistory.create({
      userId: id,
      amount,
      isDone: false,
    });
    const token = await midtrans(balanceHistory.id, amount, req.user.email);
    res.status(201).json(token);
  } catch (err) {
    next(err);
  }
};

const successTopUp = async (req, res, next) => {
  try {
    const { id } = req.user;
    const transaction = await BalanceHistory.findOne({
      where: { userId: id, isDone: false },
    });
    await User.update({ balance: transaction.amount }, { where: { id } });
    res.status(200).json({
      message: `Success add Balance with Amount ${transaction.amount}`,
    });
  } catch (err) {
    next(err);
  }
};

const detailUserbyId = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      throw { name: "notFound" };
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const profileDetails = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });
    // if (!user) {
    //   throw { name: "notFound" };
    // }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const getFollowers = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const followers = await UserFollow.findAll({
      where: { followingId: userId },
    });

    res.status(200).json(followers);
  } catch (err) {
    next(err);
  }
};

const getFollowings = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const following = await UserFollow.findAll({
      where: { followerId: userId },
    });

    res.status(200).json(following);
  } catch (err) {
    next(err);
  }
};

const allUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["name", "username", "id"],
    });
    res.status(200).json(users);
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
  topUpBalance,
  successTopUp,
  detailUserbyId,
  profileDetails,
  getFollowers,
  getFollowings,
  allUsers,
  doUnfollow,
};
