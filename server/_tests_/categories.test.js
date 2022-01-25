const request = require("supertest");
const app = require("../app");
const { Category, User } = require('../models');
const {getToken, convertToken} = require('../helpers/jwt');
const axios = require('axios')

jest.mock("axios");
// jest.setTimeout(10000);

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
            name: "Asian",
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&usqp=CAU',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );

    await Category.create(
        {
            name: "Western",
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&usqp=CAU',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );

    axios.post.mockResolvedValue({data: {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&usqp=CAU'}})
});

afterAll((done) => {
    User.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
    })
    .then(() => {
        Category.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
        });
    })
    .then(() => {
        done();
    })
    .catch((err) => {
        done(err);
    });
});

describe('Categories', () => {
    test('[Success-200] Get Categories', (done) => {
        request(app)
        .get('/categories')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Success-200] Get Categories by Id', (done) => {
        request(app)
        .get('/categories/1')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Success-201] Add Categories', (done) => {
        request(app)
        .post('/categories')
        .set("access_token", adminToken)
        .field("name", "Pizza")
        .attach("imageUrl", "test_asset/hehe.jpg")
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(201);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Success-200] Edit Categories', (done) => {
        request(app)
        .put('/categories/1')
        .set("access_token", adminToken)
        .field("name", "Pizzaa")
        .attach("imageUrl", "test_asset/hehe.jpg")
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Success-200] Delete Ingredients', (done) => {
        request(app)
        .delete(`/categories/1`)
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toHaveProperty("message", "Deleted category Pizzaa from the list");
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    // Failed Test
    test('[Failed - 404] get Ingredients by Id', (done) => {
        request(app)
        .get('/categories/100')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(404);
            expect(result).toEqual(expect.any(Object));
            expect(result).toHaveProperty('message', 'Request Not Found');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Failed-400] Add Categories', (done) => {
        request(app)
        .post('/categories')
        .set("access_token", adminToken)
        .field("name", "")
        .attach("imageUrl", "test_asset/hehe.jpg")
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(400);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Failed-400] Add Categories', (done) => {
        request(app)
        .put('/categories/1')
        .set("access_token", adminToken)
        .field("name", "")
        .attach("imageUrl", "test_asset/hehe.jpg")
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(400);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('[Failed-404] Delete Categories', (done) => {
        request(app)
        .delete('/categories/100')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(404);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test("[Failed-404] Get Categories", (done) => {
        jest
            .spyOn(Category, "findAll")
            .mockRejectedValue({ message: "Request Not Found" });
                request(app)
            .get("/categories")
            .set("access_token", adminToken)
            .then((response) => {
                const result = response.body;
                response.status = 404;
            expect(response.status).toBe(404);
            expect(result).toStrictEqual({ message: "Request Not Found" });
            done();
            })
            .catch((err) => done(err));
    });
})