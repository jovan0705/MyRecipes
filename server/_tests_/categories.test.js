// const request = require("supertest");
// const app = require("../app");
// const { Category, User } = require('../models');
// const {getToken, convertToken} = require('../helpers/jwt');

// let adminToken = ''
// beforeAll(async () => {
//     await User.create({
//         name: "admin1",
//         username: "admin1name",
//         email: "admin1@gmail.com",
//         password: "12345",
//         role: "admin",
//     });

//     adminToken = getToken({id: 1, email: "admin1@gmail.com", password: "12345", role: "admin"})

//     await Ingredient.create(
//         {
//             name: "Rice",
//             calorie: 130,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         }
//     );

//     await Ingredient.create(
//         {
//             name: "Potato",
//             calorie: 77,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//         }
//     );
// });