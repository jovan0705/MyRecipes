'use strict';

const data = [
	{
		"name" : "Asian",
		"createdAt" : "2022-01-26T10:11:04.171Z",
		"updatedAt" : "2022-01-26T10:11:04.171Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-asian_Ddc7o_ykunn.jpg"
	},
	{
		"name" : "Italian",
		"createdAt" : "2022-01-26T10:11:35.977Z",
		"updatedAt" : "2022-01-26T10:11:35.977Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-italian_kotTj2MhW.jpg"
	},
	{
		"name" : "Snack",
		"createdAt" : "2022-01-26T10:11:57.276Z",
		"updatedAt" : "2022-01-26T10:11:57.276Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-snack_YpbywS367X8.jpg"
	},
	{
		"name" : "Western",
		"createdAt" : "2022-01-26T10:12:52.490Z",
		"updatedAt" : "2022-01-26T10:12:52.490Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-western_bciI4rXHQwi.jpg"
	},
	{
		"name" : "Japanese",
		"createdAt" : "2022-01-26T10:13:14.648Z",
		"updatedAt" : "2022-01-26T10:13:14.648Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-jap_nbqV6hUmW.jpg"
	},
	{
		"name" : "Chicken",
		"createdAt" : "2022-01-26T10:13:34.046Z",
		"updatedAt" : "2022-01-26T10:13:34.046Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-meat_TV-I2V3up.jpg"
	},
	{
		"name" : "Fruit",
		"createdAt" : "2022-01-26T10:14:03.042Z",
		"updatedAt" : "2022-01-26T10:14:03.042Z",
		"imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/cat-fruit_MeWJVQ0p1.jpg"
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
