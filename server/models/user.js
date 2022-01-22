'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Class, {through: models.UserClass, foreignKey: 'userId'}),
      User.hasMany(models.UserFavoritedRecipe, {foreignKey: 'userId'})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Name must not empty" },
        notEmpty: { msg: "Name must not empty" }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Username already registered" },
      validate: {
        notNull: { msg: "Username must not empty" },
        notEmpty: { msg: "Username must not empty" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Email already registered" },
      validate: {
        isEmail: { msg: "Invalid Email format" },
        notNull: { msg: "Email must not empty" },
        notEmpty: { msg: "Email must not empty" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Password must not empty" },
        notEmpty: { msg: "Password must not empty" }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    profilePict: {
      type: DataTypes.STRING
    },
    balance: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate( (user, options) => {
    const hashedPassword =  hashPassword(user.password);
    user.password = hashedPassword;
  });

  return User;
};