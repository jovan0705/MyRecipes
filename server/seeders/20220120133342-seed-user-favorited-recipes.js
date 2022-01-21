'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserFavoritedRecipes', [
      {
        recipeId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 2,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserFavoritedRecipes')
  }
};
