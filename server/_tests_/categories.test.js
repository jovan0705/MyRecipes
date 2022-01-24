const request = require("supertest");
const app = require("../app");
const { Category, User } = require('../models');
const {getToken, convertToken} = require('../helpers/jwt');

let adminToken = ''
beforeAll(async () => {
    await User.create({
        name: "admin1",
        username: "admin1name",
        email: "admin1@gmail.com",
        password: "12345",
        role: "admin",
    });

    adminToken = getToken({id: 1, email: "admin1@gmail.com", password: "12345", role: "admin"})

    await Category.create(
        {
            name: "Rice",
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&usqp=CAU',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );
});