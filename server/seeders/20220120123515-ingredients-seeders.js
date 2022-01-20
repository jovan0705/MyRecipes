'use strict';

const data = [
	{
		"name" : "Potato",
		"calorie" : 77,
		"createdAt" : "2022-01-18T17:37:46.346Z",
		"updatedAt" : "2022-01-18T17:37:46.346Z"
	},
	{
		"name" : "Meat",
		"calorie" : 143,
		"createdAt" : "2022-01-18T17:38:50.268Z",
		"updatedAt" : "2022-01-18T17:38:50.268Z"
	},
	{
		"name" : "Rice",
		"calorie" : 130,
		"createdAt" : "2022-01-18T17:37:12.192Z",
		"updatedAt" : "2022-01-18T17:49:58.199Z"
	},
	{
		"name" : "Egg",
		"calorie" : 155,
		"createdAt" : "2022-01-18T17:57:22.875Z",
		"updatedAt" : "2022-01-18T17:57:22.875Z"
	},
	{
		"name" : "Spaghetti",
		"calorie" : 158,
		"createdAt" : "2022-01-18T17:57:42.405Z",
		"updatedAt" : "2022-01-18T17:57:42.405Z"
	},
	{
		"name" : "Chicken Breast",
		"calorie" : 165,
		"createdAt" : "2022-01-18T18:04:37.152Z",
		"updatedAt" : "2022-01-18T18:04:37.152Z"
	},
	{
		"name" : "Chicken Thighs",
		"calorie" : 177,
		"createdAt" : "2022-01-18T18:04:54.218Z",
		"updatedAt" : "2022-01-18T18:04:54.218Z"
	},
	{
		"name" : "Chicken",
		"calorie" : 239,
		"createdAt" : "2022-01-18T18:05:21.083Z",
		"updatedAt" : "2022-01-18T18:05:21.083Z"
	},
	{
		"name" : "Prawns",
		"calorie" : 99,
		"createdAt" : "2022-01-18T18:05:52.845Z",
		"updatedAt" : "2022-01-18T18:05:52.845Z"
	},
	{
		"name" : "Fish",
		"calorie" : 206,
		"createdAt" : "2022-01-18T18:06:17.238Z",
		"updatedAt" : "2022-01-18T18:06:17.238Z"
	},
	{
		"name" : "Spinach",
		"calorie" : 23,
		"createdAt" : "2022-01-18T18:06:39.672Z",
		"updatedAt" : "2022-01-18T18:06:39.672Z"
	},
	{
		"name" : "Carrot",
		"calorie" : 41,
		"createdAt" : "2022-01-18T18:06:53.488Z",
		"updatedAt" : "2022-01-18T18:06:53.488Z"
	},
	{
		"name" : "Broccoli",
		"calorie" : 35,
		"createdAt" : "2022-01-18T18:07:32.899Z",
		"updatedAt" : "2022-01-18T18:07:32.899Z"
	},
	{
		"name" : "Noodle",
		"calorie" : 138,
		"createdAt" : "2022-01-18T18:08:01.952Z",
		"updatedAt" : "2022-01-18T18:08:01.952Z"
	},
	{
		"name" : "Sausage",
		"calorie" : 346,
		"createdAt" : "2022-01-18T18:09:29.169Z",
		"updatedAt" : "2022-01-18T18:09:29.169Z"
	},
	{
		"name" : "Milk",
		"calorie" : 42,
		"createdAt" : "2022-01-18T18:09:51.675Z",
		"updatedAt" : "2022-01-18T18:09:51.675Z"
	},
	{
		"name" : "Shirataki Rice",
		"calorie" : 10,
		"createdAt" : "2022-01-18T18:12:17.710Z",
		"updatedAt" : "2022-01-18T18:12:17.710Z"
	},
	{
		"name" : "Shirataki Noodle",
		"calorie" : 20,
		"createdAt" : "2022-01-18T18:12:46.466Z",
		"updatedAt" : "2022-01-18T18:12:46.466Z"
	},
	{
		"name" : "Butter",
		"calorie" : 717,
		"createdAt" : "2022-01-18T18:14:22.033Z",
		"updatedAt" : "2022-01-18T18:14:22.033Z"
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
      await queryInterface.bulkInsert('Ingredients', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Ingredients', null)
  }
};
