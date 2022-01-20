'use strict';
const { hashPassword } = require('../helpers/bcrypt')

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
   await queryInterface.bulkInsert('Users', [
     {
       name: "sample1",
       username: "usersample1",
       email: 'sample1@mail.com',
       password: hashPassword('sample'),
       role: 'admin',
       profilePict: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
       balance: 0,
       description: "sample description",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: "sample2",
      username: "sampleuser2",
      email: 'sample2@mail.com',
      password: hashPassword('sample'),
      role: 'admin',
      profilePict: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
      balance: 0,
      description: "sample description",
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users')
  }
};
