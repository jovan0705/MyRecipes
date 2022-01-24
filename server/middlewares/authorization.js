const { User } = require("../models/index");

const editProfileAuthorization = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const userId = req.user.id;
    const userRole = req.user.role;

    // note dari ihza: kayaknya yg dibawah ini parameternya userId bukan targetId
    // note dari geri: udah bener ini za, ini sebenerya authorization untuk edit profile, targetId untuk id profile yang akan diedit, kalau userId itu user yang akan mengubah profile, biar jelas saya ubah namanya jadi editProfileAuthorization dari userAuthorization.
    const user = await User.findByPk(targetId)
        if (!user) {
            throw({name: 'notFound'})
        }

        if (userRole !== 'admin') {
            if (user.id !== userId) {
                throw({name: 'unauthorized'})
            }
        }

        next()
  } catch (err) {
    next(err);
  }
};

const adminRegisterAuthorization = async (req, res, next) => {
  try {
    const userRole = req.user.role;

    if (userRole !== 'admin') {
      throw { name: "unauthorized" }
    }

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {editProfileAuthorization, adminRegisterAuthorization};
