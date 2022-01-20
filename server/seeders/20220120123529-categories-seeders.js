'use strict';

const data = [
	{
		"name" : "Asian",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/fried-rice_Z0gnUEkDb.jpg",
		"createdAt" : "2022-01-20T13:11:00.783Z",
		"updatedAt" : "2022-01-20T13:11:00.783Z"
	},
	{
		"name" : "Snack",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/snack_M7UwSNaiM.jpg",
		"createdAt" : "2022-01-20T13:13:04.030Z",
		"updatedAt" : "2022-01-20T13:13:04.030Z"
	},
	{
		"name" : "Pasta",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/pasta_rz32N9x39.jpg",
		"createdAt" : "2022-01-20T13:13:54.997Z",
		"updatedAt" : "2022-01-20T13:15:16.696Z"
	}
]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Categories', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Categories', null)
  }
};
