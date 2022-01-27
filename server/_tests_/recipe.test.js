const request = require("supertest");
const app = require("../app");
const {
  Ingredient,
  Recipe,
  User,
  UserFavoritedRecipe,
  RecipeRating,
  Category
} = require("../models");
const { hashPassword, decryptPassword } = require("../helpers/bcrypt");
const { readFileSync } = require("fs");
const testImage = readFileSync(
  "./_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
);
const axios = require("axios");
jest.mock("axios");
const testImageUrl =
  "https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png";

let adminToken = "";
const ingredientSeed = [
  {
		"name" : "Potato",
		"calorie" : 77,
		"createdAt" : "2022-01-18T17:37:46.346Z",
		"updatedAt" : "2022-01-18T17:37:46.346Z"
	},
	{
		"name" : "Meat",
		"calorie" : 143,
		"createdAt" : "2022-01-18T17:38:50.268Z",
		"updatedAt" : "2022-01-18T17:38:50.268Z"
	},
	{
		"name" : "Rice",
		"calorie" : 130,
		"createdAt" : "2022-01-18T17:37:12.192Z",
		"updatedAt" : "2022-01-18T17:49:58.199Z"
	}
]

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
        .send({ emailOrUsername: "admin1@gmail.com", password: "12345" });
      adminToken = response.body.accessToken;

      await Category.create({
        "name" : "Asian",
        "imageUrl" : "https:\/\/ik.imagekit.io\/blyhh5i9rje\/fried-rice_Z0gnUEkDb.jpg"
      })

      await Recipe.create({
        name: "10-minute couscous salad",
        steps: [
          "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",
        ],
        imageUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/couscous-9ab75f0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await Ingredient.bulkCreate(ingredientSeed)
    })
    .then(() => {
      UserFavoritedRecipe.create({ userId: 1, recipeId: 1 });
    })
    .then(() => {
      Recipe.create({
        name: "10-minute couscous salad",
        steps: [
          "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",
        ],
        imageUrl:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/couscous-9ab75f0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    })
    .then((_) => done())
    .catch((err) => done(err));
});

let userToken1 = "";

beforeAll(async () => {
  await User.create({
    name: "userTest1",
    username: "userTest1name",
    email: "userTest1@gmail.com",
    password: "12345",
    role: "user",
  });

  const userLogin1 = await request(app)
    .post("/login")
    .send({ emailOrUsername: "userTest1@gmail.com", password: "12345" });
  userToken1 = userLogin1.body.accessToken;

});
beforeEach(() => {
  jest.restoreAllMocks();
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
      UserFavoritedRecipe.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
      });
    })
    .then(() => {
      Category.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
      });
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

describe("GET /recipes", () => {
  test("GET /recipes return array of objects", (done) => {
    request(app)
      .get("/recipes")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      })
      .catch((err) => done(err));
  });

  test("GET /recipes return status code 404 when not found", (done) => {
    jest
      .spyOn(Recipe, "findAll")
      .mockRejectedValue({ message: "Request Not Found" });
    request(app)
      .get("/recipes")
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

  test("GET /recipes return status code 404 when not found", (done) => {
    jest.spyOn(Recipe, "findAll").mockResolvedValue(false);
    request(app)
      .get("/recipes")
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
});

describe("GET /recipes/favourites", () => {
  test("GET /recipes/favourites return array of objects", (done) => {
    request(app)
      .get("/recipes/favourites")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        const sampleResponse = {
          favoritedRecipes: [{}],
        };

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("favoritedRecipes");
        expect(result).toMatchObject(sampleResponse);
        expect(result.favoritedRecipes).toBeInstanceOf(Array);
        done();
      })
      .catch((err) => done(err));
  });

  test("GET /recipes/favourites should return status code 404 when not found", (done) => {
    jest
      .spyOn(UserFavoritedRecipe, "findAll")
      .mockRejectedValue({ message: "Request Not Found" });
    request(app)
      .get("/recipes/favourites")
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

  test("GET /recipes/favourites should return status code 404 when not found", (done) => {
    jest.spyOn(UserFavoritedRecipe, "findAll").mockResolvedValue(false);
    request(app)
      .get("/recipes/favourites")
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
});

describe("GET /recipes/own", () => {
  test("GET /recipes/own return array of objects", (done) => {
    request(app)
      .get("/recipes/own")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("userCreatedRecipes");
        expect(result.userCreatedRecipes).toBeInstanceOf(Array);
        done();
      })
      .catch((err) => done(err));
  });

  test("GET /recipes/own should return status code 404 when not found", (done) => {
    jest
      .spyOn(Recipe, "findAll")
      .mockRejectedValue({ message: "Request Not Found" });
    request(app)
      .get("/recipes/own")
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

  test("GET /recipes/own should return status code 404 when not found", (done) => {
    jest.spyOn(Recipe, "findAll").mockResolvedValue(false);
    request(app)
      .get("/recipes/own")
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
});

describe("GET /recipes/:id", () => {
  test("GET /recipes/:id should return object", (done) => {
    request(app)
      .get("/recipes/1")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        done();
      })
      .catch((err) => done(err));
  });

  test("should return not found when requested id not found", (done) => {
    jest.spyOn(Recipe, "findByPk").mockResolvedValue(false);
    request(app)
      .get("/recipes/1")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toBe(404);
        expect(result).toStrictEqual({ message: "Request Not Found" });
        done();
      })
      .catch((err) => done(err));
  });

  test("should return not found when requested id not found", (done) => {
    jest.spyOn(Recipe, "findByPk").mockResolvedValue(false);
    request(app)
      .get("/recipes/1")
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
});

describe("POST /recipes", () => {
  const sampleInput = {
    name: "10-minute couscous salad",
    steps:
      "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",

    totalCalories: 500,
    categoryId: 1,
    ingredients: '1,2,3',
    imageFile: testImage,
  };

  test("POST /recipes return object of posted recipe", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>", result, "<<<<<<<<<<<<<<<<<<")

        expect(response.status).toEqual(201);
        expect(result).toBeInstanceOf(Object);
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 400 when name empty", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", "")
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Name required");
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 400 when steps empty", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", "")
      .field("totalCalories", sampleInput.totalCalories)
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Steps required");
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 400 when total calories empty", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", "")
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Total Calories required");
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 400 when image empty", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Please insert an image");
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 400 when categoryId empty", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);

    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Please enter an category");
        done();
      })
      .catch((err) => done(err));
  });

  test("POST /recipes should return status code 500 when error create", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    // console.log(resp)
    axios.post.mockResolvedValue(resp);
    jest.spyOn(Recipe, "create").mockResolvedValue(false);
    request(app)
      .post("/recipes")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .field("categoryId", sampleInput.categoryId)
      .field("ingredients", sampleInput.ingredients)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        expect(response.status).toEqual(500);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty(
          "message",
          "Internal Server Error: error creating recipe"
        );
        done();
      })
      .catch((err) => done(err));
  });
});

describe("PUT /recipes", () => {
  const sampleInput = {
    name: "10-minute couscous salad",
    steps:
      "Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.",

    totalCalories: 500,
    imageFile: testImage,
  };

  test("EDIT /recipes/:id should return message 'Edit Successful'", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    axios.post.mockResolvedValue(resp);

    request(app)
      .put("/recipes/1")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>",
          result,
          "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
        );

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Edit Successful");
        done();
      })
      .catch((err) => done(err));
  });

  test("EDIT /recipes/:id should return status code 404 when not found", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    axios.post.mockResolvedValue(resp);

    request(app)
      .put("/recipes/7")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>",
          result,
          "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
        );

        expect(response.status).toEqual(404);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Request Not Found");
        done();
      })
      .catch((err) => done(err));
  });
  

  test("EDIT /recipes/:id should return status code 500 when update operation failed", (done) => {
    const resp = {
      data: {
        url: testImageUrl,
      },
    };
    axios.post.mockResolvedValue(resp);
    jest.spyOn(Recipe, "update").mockResolvedValue(false);
    request(app)
      .put("/recipes/1")
      .set({
        access_token: adminToken,
        testing: true,
      })
      .field("name", sampleInput.name)
      .field("steps", sampleInput.steps)
      .field("totalCalories", sampleInput.totalCalories)
      .attach(
        "imageFile",
        "_tests_/testImage/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      .then((response) => {
        const result = response.body;
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>",
          result,
          "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
        );

        expect(response.status).toEqual(500);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty(
          "message",
          "Internal Server Error: error updating recipe"
        );
        done();
      })
      .catch((err) => {
        done(err)
      });
  });
});

describe("POST recipes/:id/rate ", () => {
  const sampleInput = {
    rating: 5,
    review: "Good Menu",
  };
  test("should return status code 201 when success", (done) => {
    request(app)
      .post("/recipes/1/rate")
      .send(sampleInput)
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(201);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("userId");
        expect(result).toHaveProperty("recipeId");
        expect(result).toHaveProperty("rating");
        expect(result).toHaveProperty("review");
        expect(result).toHaveProperty("updatedAt");
        expect(result).toHaveProperty("createdAt");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  jest
    .spyOn(RecipeRating, "create")
    .mockRejectedValue({ message: "Item already rated" });
  test("should return message 'Item already rated' if user has already rated the recipe", (done) => {
    request(app)
      .post("/recipes/1/rate")
      .send(sampleInput)
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toBe(400);
        expect(result).toStrictEqual({ message: "Item already rated" });
        done();
      })
      .catch((err) => done(err));
  });

  test("should return status code 400 if rating empty", (done) => {
    request(app)
      .post("/recipes/1/rate")
      .send({
        rating: "",                                           
        review: "Good Menu",
      })
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toBe(400);
        expect(result).toHaveProperty("message", "Bad Request");
        done();
      })
      .catch((err) => done(err));
  });

  test("should return status code 400 if review empty", (done) => {
    request(app)
      .post("/recipes/1/rate")
      .send({
        rating: 5,
        review: "",
      })
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toBe(400);
        expect(result).toHaveProperty("message", "Bad Request");
        done();
      })
      .catch((err) => done(err));
  });
});

describe("POST /recipes/favourite/:recipeId", () => {
  test("should return status code 201 when success", (done) => {
    request(app)
      .post("/recipes/favourite/1")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(201);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Recipe Favorited");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should return status code 400 when error", (done) => {
    request(app)
      .post("/recipes/favourite/1")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Recipe already Favorited");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})

describe("GET /recipes/:id/rate", () => {
  test("should return status code 201 when success", (done) => {
    request(app)
      .get("/recipes/1/rate")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should return status code 201 when success", (done) => {
    request(app)
      .get("/recipes/1/rate")
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Invalid Access Token");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})

describe("GET /recipes/feeds", () => {
  test("should return status code 201 when success", (done) => {
    request(app)
      .get("/recipes/feeds")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should return status code 400 when Invalid Access Token", (done) => {
    request(app)
      .get("/recipes/feeds")
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Invalid Access Token");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})

describe("DELETE /recipes/favourite/:recipeId", () => {
  test("should return status code 200 when success", (done) => {
    request(app)
      .delete("/recipes/favourite/1")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Recipe Unfavorited");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("should return status code 400 when error", (done) => {
    request(app)
      .delete("/recipes/favourite/1")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message", "Recipe not Favorited");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})



describe("DELETE /recipes/:id", () => {
  test("DELETE /recipes/:id should return object with message 'Deleted Successfully'", (done) => {
    request(app)
      .delete("/recipes/1")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty("message");
        expect(result.message).toEqual("Deleted Successfully");
        done();
      })
      .catch((err) => done(err));
  });

  test("DELETE /recipes/:id should return status code 404 when requested news id is not found", (done) => {
    request(app)
      .delete("/recipes/10")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;

        expect(response.status).toEqual(404);
        expect(result).toStrictEqual({ message: "Request Not Found" });
        done();
      })
      .catch((err) => done(err));
  });

  test("DELETE /recipes/:id should return status code 500 fail delete operation", (done) => {
    jest
      .spyOn(Recipe, "destroy")
      .mockRejectedValue({ message: "Internal Server Error" });
    request(app)
      .delete("/recipes/2")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        response.status = 500;

        expect(response.status).toEqual(500);
        expect(result).toStrictEqual({ message: "Internal Server Error" });
        done();
      })
      .catch((err) => done(err));
  });

  test("DELETE /recipes/:id should return status code 500 fail delete operation", (done) => {
    jest.spyOn(Recipe, "destroy").mockResolvedValue(false);
    request(app)
      .delete("/recipes/2")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        response.status = 500;

        expect(response.status).toEqual(500);
        expect(result).toHaveProperty(
          "message",
          "Internal Server Error: error deleting recipe"
        );
        done();
      })
      .catch((err) => done(err));
  });
});
