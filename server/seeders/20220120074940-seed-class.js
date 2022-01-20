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
   await queryInterface.bulkInsert('Classes', [
     {
       name: 'Cah Kangkung Lezat',
       image: 'https://www.piknikdong.com/wp-content/uploads/2021/01/Resep-Cah-Kangkung.jpg',
       link: 'http://inilinkzoom',
       date: new Date('2022-01-20'),
       price: 50000,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Cah Kangkung Lezat 2',
      image: 'https://www.piknikdong.com/wp-content/uploads/2021/01/Resep-Cah-Kangkung.jpg',
      link: 'http://inilinkzoom',
      date: new Date('2022-01-22'),
      price: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mochi Class',
      image: 'https://asset.kompas.com/crops/GLvocgHUfz4uOqxlIvbEZtArseQ=/0x23:1000x689/750x500/data/photo/2021/09/29/61541255e9dcb.jpg',
      link: 'http://inilinkzoommochi',
      date: new Date('2022-01-24'),
      price: 80000,
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
