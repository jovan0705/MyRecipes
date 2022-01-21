'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserFavoritedRecipes', [
      {
<<<<<<< HEAD
        recipeId: 5,
        userId: 1,
=======
        recipeId: 1,
        userId: 3,
>>>>>>> 4f586e61efb562cc075d84133467540b446a7ae3
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
<<<<<<< HEAD
        recipeId: 6,
        userId: 1,
=======
        recipeId: 2,
        userId: 4,
>>>>>>> 4f586e61efb562cc075d84133467540b446a7ae3
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserFavoritedRecipes')
  }
};
