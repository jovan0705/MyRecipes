const request = require("supertest");
const app = require("../app");
const { Recipe, User, UserFavoritedRecipe } = require("../models");
const FormData = require('form-data')
const fs = require('fs');
const { default: axios } = require("axios");
const { response } = require("express");
const testImage = fs.readFileSync('./_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png')
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQyODIzMTg4fQ.7wo2alP5YW_vTLzVyMrjQd1Tu4-jiuCUHtF-ki8ydnw"
const testImageUrl = 'https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png'


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

beforeEach(() => {
  jest.restoreAllMocks()
})

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
  test("GET /recipes/:id should return object", (done) => {
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

  test("should return not found when requested id not found", (done) => {
    jest.spyOn(Recipe, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/recipes/1")
    .set("access_token", token)
    .then((response) => {
      const result = response.body
      console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

      expect(response.status).toBe(500)
      expect(result).toBe('Error')
      done()
    })
    .catch(err => done(err))
  })
});

// describe("POST /recipes", () => {
//   const sampleInput = {
//     name: "10-minute couscous salad",
//     steps: 
//       "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",
    
//     totalCalories: 500,
//     imageFile: testImage
//   }
//   const form = new FormData ()
//   form.append('name', sampleInput.name)
//   form.append('steps', sampleInput.steps)
//   form.append('totalCalories', sampleInput.totalCalories)
//   form.append('imageFile', sampleInput.imageFile)
//   // console.log(form, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
//   test("POST /recipes return object posted", (done) => {
//     request(app)
//       .post('/recipes')
//       .type('xml')
//       .set("access_token", token)
//       .set("testing", true)
//       .send(sampleInput)
//       // .then((req, res, next) => {
//       //   jest.mock('axios')
//       //   const response = await axios.post('https://upload.imagekit.io/api/v1/', {
//       //     headers: form.getHeaders(),
//       //     body: req.form,
//       //   }).mockResolvedValue(testImageUrl)
//       //   req.additionalData = response
//       //   next()
//       // })
//       .then((response) => {
//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",response, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
//         const result = response.body

//         expect(response.status).toEqual(201)
//         expect(result).toBeInstanceOf(Object);
//         done()
//       })
//       .catch(err => done(err))
//   })
// })

describe("DELETE /recipes/:id", () => {
  test("DELETE /recipes/:id should return object with message 'Deleted Successfully'", (done) => {
    request(app)
    .delete('/recipes/1')
    .set("access_token", token)
    .then((response) => {
      const result = response.body
      
      expect(response.status).toEqual(200)
      expect(result).toBeInstanceOf(Object)
      expect(result).toHaveProperty("message")
      expect(result.message).toEqual('Deleted Successfully')
      done()
    })
    .catch(err => done(err))
  })
})

// describe put recipe
// describe post rating
// error juga belum di testing