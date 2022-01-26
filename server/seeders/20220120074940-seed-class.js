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
       name: 'Cah Kangkung',
       image: 'https://www.piknikdong.com/wp-content/uploads/2021/01/Resep-Cah-Kangkung.jpg',
       link: 'http://kangkunglink',
       date: new Date('2022-01-20'),
       price: 50000,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Homemade Baguette',
      image: 'https://cf.shopee.co.id/file/67c6ca65981779cc786c43f96052ff4c',
      link: 'http://baguettelink',
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
    {
      name: 'Rawon Class',
      image: 'https://awsimages.detik.net.id/community/media/visual/2021/10/14/resep-rawon-daging-surabaya-1.jpeg?w=700&q=90',
      link: 'http://rawonlink',
      date: new Date('2022-01-27'),
      price: 40000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Soto Class',
      image: 'https://awsimages.detik.net.id/community/media/visual/2021/12/14/resep-soto-ayam-jawa_43.jpeg?w=700&q=90',
      link: 'http://sotolink',
      date: new Date('2022-01-27'),
      price: 30000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sup Bibir Ikan Class',
      image: 'https://i.ytimg.com/vi/2S00qQ85SwY/maxresdefault.jpg',
      link: 'http://supbibirikanclasslink',
      date: new Date('2022-01-30'),
      price: 100000,
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
