const request = require("supertest");
const app = require("../app");
const { Recipe, User, UserFavoritedRecipe } = require("../models");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQyODIzMTg4fQ.7wo2alP5YW_vTLzVyMrjQd1Tu4-jiuCUHtF-ki8ydnw"

beforeAll((done) => {
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
  })
    .then((_) => {
      UserFavoritedRecipe.create({
        recipeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    })
    .then((_) => done())
    .catch((err) => done(err));
});

afterAll((done) => {
  Recipe.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  })
    .then(() => {
      UserFavoritedRecipe.destroy({
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
  test("GET /recipes return array of objects", (done) => {
    request(app)
      .get("/recipes")
      .set("access_token", token)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      })
      .catch(err => done(err) )
  });
});

describe("GET /recipes/favourites", () => {
  test("GET /recipes/favourites return array of objects", (done) => {
    request(app)
      .get("/recipes/favourites")
      .set("access_token", token)
      .then((response) => {
        const result = response.body;
        const sampleResponse = {
          "favoritedRecipes": [{}]
        }

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("favoritedRecipes")
        expect(result).toMatchObject(sampleResponse)
        expect(result.favoritedRecipes).toBeInstanceOf(Array)
        done();
      })
      .catch(err => done(err))
  });
});

describe("GET /recipes/own", () => {
  test("GET /recipes/own return array of objects", (done) => {
    request(app)
      .get("/recipes/own")
      .set("access_token", token)
      .then((response) => {
        const result = response.body;
        const sampleResponse = {
          "userCreatedRecipes": [{}]
        }

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("userCreatedRecipes")
        expect(result).toMatchObject(sampleResponse)
        expect(result.userCreatedRecipes).toBeInstanceOf(Array)
        done();
      })
      .catch(err => done(err))
  });
});

describe("GET /recipes/:id", () => {
  test("GET /recipes/:id return object", (done) => {
    request(app)
      .get("/recipes/1")
      .set("access_token", token)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        done();
      })
      .catch(err => done(err) )
  });
});

