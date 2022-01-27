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
        name: "Jovan Gunawan",
        username: "jovangunawan",
        email: "jovan@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D5635AQFBmNpZzAAlhA/profile-framedphoto-shrink_400_400/0/1642750849011?e=1643342400&v=beta&t=lWC6XOTrlrVSNWb9swNvZafa6zr04mbf6TbejudNV1o',
        balance: 1000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Johannes",
        username: "johannes",
        email: "johannes@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D5635AQHvMfxtOyCxuA/profile-framedphoto-shrink_400_400/0/1642482594068?e=1643342400&v=beta&t=i_Gh7XNcFaHSsI_5TqGRiB1uBtKCetsxMvNFPJKqiSk',
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sys Wyndar",
        username: "syswyndar",
        email: "syswyndar@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D5635AQGjSA43Cs_gLQ/profile-framedphoto-shrink_200_200/0/1642798800416?e=1643342400&v=beta&t=DKop1NaMwRhdICVEuBy8pQ9jN_wGJbciBZDtlkKb40k',
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ihza Anantama",
        username: "ihzaanantama",
        email: "ihza@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D5635AQEi5hpv4yjnFw/profile-framedphoto-shrink_200_200/0/1643171068354?e=1643342400&v=beta&t=xhhh8m2mgnwKCLG379-XUN5_i2U6XKK6IcaYzkicczM',
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Geri Muhano",
        username: "gerimuhano",
        email: "geri@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D4E35AQGC51Lg3pccZg/profile-framedphoto-shrink_400_400/0/1642770768212?e=1643342400&v=beta&t=2Df08fCMC6_NfepbtTlxSYDVXbjr5-mwORrH0-YBU58',
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hadar Winuratama",
        username: "hadarwinuratama",
        email: "hadar@mail.com",
        password: hashPassword("12345"),
        role: "user",
        profilePict: 'https://media-exp1.licdn.com/dms/image/D5635AQHNV2Vq6FV0nQ/profile-framedphoto-shrink_400_400/0/1641371773891?e=1643342400&v=beta&t=LmIijqrNfunwbCCuCsJQE-R7hd1mWPI_d0YFhChL3-c',
        balance: 0,
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
