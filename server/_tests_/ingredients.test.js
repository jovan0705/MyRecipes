const request = require("supertest");
const app = require("../app");
const { Ingredient, User } = require('../models');
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

    await Ingredient.create(
        {
            name: "Rice",
            calorie: 130,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );

    await Ingredient.create(
        {
            name: "Potato",
            calorie: 77,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );
});



afterAll((done) => {
    User.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
    })
    .then(() => {
        Ingredient.destroy({
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

describe('Ingredients', () => {
    test('success get Ingredients', (done) => {
        request(app)
        .get('/ingredients')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toEqual(expect.any(Array));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('success add Ingredients', (done) => {
        request(app)
        .post('/ingredients')
        .send({
            name: "Egg",
            calorie: 155
        })
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(201);
            expect(result.response).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('success get Ingredients by Id', (done) => {
        request(app)
        .get('/ingredients/1')
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(200);
            expect(result).toEqual(expect.any(Object));
            done()
        })
        .catch((err) => {
            console.log(err, 'ERROR');
            done(err)
        })
    })

    test('success edit Ingredients', (done) => {
        request(app)
        .put(`/ingredients/1`)
        .send({
            name: "Riceee",
            calorie: 135
        })
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

    test('success delete Ingredients', (done) => {
        request(app)
        .delete(`/ingredients/1`)
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            console.log(result, 'RESPONSE >>>>');
            expect(response.status).toBe(200);
            expect(result).toHaveProperty("message", "Delete Riceee from ingridient list");
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    // Failed Tests

    test('failed get Ingredients by Id', (done) => {
        request(app)
        .get('/ingredients/100')
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

    test('failed add Ingredients', (done) => {
        request(app)
        .post('/ingredients')
        .send({
            name: "",
            calorie: 155
        })
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(400);
            expect(result).toHaveProperty('message', 'Validation notEmpty on name failed');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('failed edit Ingredients', (done) => {
        request(app)
        .put(`/ingredients/1`)
        .send({
            name: "",
            calorie: 135
        })
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            expect(response.status).toBe(400);
            expect(result).toHaveProperty('message', 'Validation notEmpty on name failed');
            done()
        })
        .catch((err) => {
            done(err)
        })
    })

    test('success delete Ingredients', (done) => {
        request(app)
        .delete(`/ingredients/100`)
        .set("access_token", adminToken)
        .then((response) => {
            const result = response.body;
            console.log(result, 'RESPONSE >>>>');
            expect(response.status).toBe(400);
            expect(result).toHaveProperty("message", "Bad Request");
            done()
        })
        .catch((err) => {
            done(err)
        })
    })
})

