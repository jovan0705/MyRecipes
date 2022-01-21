'use strict';

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
   await queryInterface.bulkInsert('UserClasses', [
     {
     userId: 1,
     classId: 1,
     isPayed: true,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      userId: 1,
      classId: 2,
      isPayed: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 2,
      classId: 1,
      isPayed: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
