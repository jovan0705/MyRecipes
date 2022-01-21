'use strict';
const {hashPassword} = require('../helpers/bcrypt')


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
         name: "admin1",
         username: "admin1name",
         email: "admin1@gmail.com",
         password: hashPassword("12345"),
         role: "admin",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        name: "admin2",
        username: "admin2name",
        email: "admin2@gmail.com",
        password: hashPassword("12345"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        name: "user1",
        username: "user1name",
        email: "user1@gmail.com",
        password: hashPassword("12345"),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "user2",
        username: "user2name",
        email: "user2@gmail.com",
        password: hashPassword("12345"),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null)
  }
};
