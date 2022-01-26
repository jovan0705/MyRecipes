'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoritedRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserFavoritedRecipe.belongsTo(models.User, {foreignKey: 'userId'}),
      UserFavoritedRecipe.belongsTo(models.Recipe, {foreignKey: 'recipeId'})
    }
  }
  UserFavoritedRecipe.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'UserFavoritedRecipe',
  });
  return UserFavoritedRecipe;
};