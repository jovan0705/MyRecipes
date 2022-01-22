const request = require("supertest");
const app = require("../app");
const { Recipe, User } = require("../models");
const { hashPassword, decryptPassword } = require("../helpers/bcrypt");

let adminToken = "";

beforeAll((done) => {
  User.create({
    name: "admin1",
    username: "admin1name",
    email: "admin1@gmail.com",
    password: "12345",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then(async (_) => {
      const response = await request(app)
        .post("/login")
        .send({ email: "admin1@gmail.com", password: "12345" });
      adminToken = response.body.accessToken;

      Recipe.create({
        name: "10-minute couscous salad",
        steps: [
          "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",
        ],
        imageUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/couscous-9ab75f0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        totalCalories: 327,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    })
    .then((_) => done())
    .catch((err) => done(err));
});

afterAll((done) => {
  User.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  })
    .then(() => {
      Recipe.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
      });
    })
    .then(() => {
      done();
    })
    .catch(() => {
      done(err);
    });
});

describe("GET /recipes", () => {
  test("GET /news return array of objects", (done) => {
    request(app)
      .get("/recipes")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      });
  });
});
