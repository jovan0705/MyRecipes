const request = require("supertest");
const app = require("../app");
const { Recipe, User, UserFollow, BalanceHistory } = require("../models");
const { hashPassword, decryptPassword } = require("../helpers/bcrypt");
const axios = require('axios')

jest.mock("axios")

let adminToken = "";
let userToken1 = "";
let userToken2 = "";
let userToken3 = "";
let userToken4 = "";
let userToken5 = "";
let wrongToken = "okyldkrgrndr";

beforeAll(async () => {
  await User.create({
    name: "admin1",
    username: "admin1name",
    email: "admin1@gmail.com",
    password: "12345",
    role: "admin",
  });

  await User.create({
    name: "userTest1",
    username: "userTest1name",
    email: "userTest1@gmail.com",
    password: "12345",
    role: "user",
  });

  await User.create({
    name: "userTest2",
    username: "userTest2name",
    email: "userTest2@gmail.com",
    password: "12345",
    role: "user",
    balance: 0
  });

  await User.create({
    name: "userTest3",
    username: "userTest3name",
    email: "userTest3@gmail.com",
    password: "12345",
    role: "user",
  });


  await User.create({
    name: "userTest4",
    username: "userTest4name",
    email: "userTest4@gmail.com",
    password: "12345",
    role: "user",
    balance: 0
  });


  const response = await request(app)
    .post("/login")
    .send({ emailOrUsername: "admin1@gmail.com", password: "12345" });
  adminToken = response.body.accessToken;

  const userLogin1 = await request(app)
    .post("/login")
    .send({ emailOrUsername: "userTest1@gmail.com", password: "12345" });
  userToken1 = userLogin1.body.accessToken;

  const userLogin2 = await request(app)
    .post("/login")
    .send({ emailOrUsername: "userTest2@gmail.com", password: "12345" });
  userToken2 = userLogin2.body.accessToken;

  const userLogin3 = await request(app)
    .post("/login")
    .send({ emailOrUsername: "userTest3@gmail.com", password: "12345" });
  userToken3 = userLogin3.body.accessToken;

  const userLogin4 = await request(app)
    .post("/login")
    .send({ emailOrUsername: "userTest4@gmail.com", password: "12345" });
  userToken4 = userLogin4.body.accessToken;



  await User.destroy({ where: { id: 5 } })
});

afterAll((done) => {
  User.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  })
    .then(() => {
      return UserFollow.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
      });
    })
    .then(() => {
      BalanceHistory.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
      })
    })
    .then(() => {
      done();
    })
    .catch(() => {
      done(err);
    });
});

describe("POST /userregister", () => {
  test("[success - 201] - success return an object with status code 201", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user1name",
        username: "user1",
        email: "user1@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(201);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("id", 6);
        expect(response.body).toHaveProperty("email", "user1@gmail.com");
        done();
      });
  });

  test("[failed - 400] - register with empty string for email should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user2name",
        username: "user2",
        email: "",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Invalid Email format");
        done();
      });
  });

  test("[failed - 400] - register with empty string for name should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "",
        username: "user2",
        email: "user2@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Name must not empty");
        done();
      });
  });

  test("[failed - 400] - register with empty string for username should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user2name",
        username: "",
        email: "user2@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty(
          "message",
          "Username must not empty"
        );
        done();
      });
  });

  test("[failed - 400] - register with empty string for password should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user2name",
        username: "user2",
        email: "user2@gmail.com",
        password: "",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty(
          "message",
          "Password must not empty"
        );
        done();
      });
  });

  test("[failed - 400] - register with already registered email should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user2name",
        username: "user2",
        email: "user1@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty(
          "message",
          "Email already registered"
        );
        done();
      });
  });

  test("[failed - 400] - register with already registered username should be return an object with status code 400", (done) => {
    request(app)
      .post("/userregister")
      .send({
        name: "user2name",
        username: "user1",
        email: "user1@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty(
          "message",
          "Username already registered"
        );
        done();
      });
  });
});

describe("POST /login", () => {
  test("[success - 200] - success login should be return an object with status code 200", (done) => {
    request(app)
      .post("/login")
      .send({ emailOrUsername: "admin1@gmail.com", password: "12345" })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("accessToken");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - login with wrong password should be return an object with status code 400", (done) => {
    request(app)
      .post("/login")
      .send({ emailOrUsername: "admin1@gmail.com", password: "54321" })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty(
          "message",
          "Invalid email/password"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - login with unregistered email should be return an object with status code 400", (done) => {
    request(app)
      .post("/login")
      .send({ emailOrUsername: "admin0@gmail.com", password: "12345" })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty(
          "message",
          "Invalid email/password"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - login without entering email or username should be return an object with status code 400", (done) => {
    request(app)
      .post("/login")
      .send({ password: "12345" })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "Bad Request");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("POST /users/adminregister", () => {
  test("[success - 201] - success register admin should return an object with status code 201", (done) => {
    request(app)
      .post("/users/adminregister")
      .set("access_token", adminToken)
      .send({
        name: "admin2name",
        username: "admin2",
        email: "admin2@gmail.com",
        password: "12345",
        role: "admin",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(201);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("id", 9);
        expect(response.body).toHaveProperty("email", "admin2@gmail.com");
        done();
      });
  });

  test("[failed - 400] - register admin without admin privilige should be return an object with status code 400", (done) => {
    request(app)
      .post("/users/adminregister")
      .set("access_token", userToken1)
      .send({
        name: "admin2name",
        username: "admin2",
        email: "admin2@gmail.com",
        password: "12345",
        role: "admin",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "You are unauthorized");
        done();
      });
  });

  test("[failed - 400] - register with empty string for name should be return an object with status code 400", (done) => {
    request(app)
      .post("/users/adminregister")
      .set("access_token", adminToken)
      .send({
        name: "",
        username: "user2",
        email: "user2@gmail.com",
        password: "12345",
        role: "user",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Name must not empty");
        done();
      });
  });
});

describe("POST /users/follows", () => {
  test("[success - 201] - success following should be return an object with status code 201", (done) => {
    request(app)
      .post("/users/follows")
      .send({ targetId: 3 })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("followerId", 2);
        expect(response.body).toHaveProperty("followingId", 3);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - same userId and targetId when following should be return an object with status code 400", (done) => {
    request(app)
      .post("/users/follows")
      .send({ targetId: 2 })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty(
          "message",
          "FollowerId and followingId cannot be the same"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - following the same user should be return an object with status code 400", (done) => {
    request(app)
      .post("/users/follows")
      .send({ targetId: 3 })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty(
          "message",
          "User already following the target user"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("PUT /users/editprofile/:id", () => {
  test("[success - 200] - success edit profile should be return an object with status code 201", (done) => {
    request(app)
      .put("/users/editprofile/2")
      .send({
        name: "user1Edited",
        description: "This is bio for user1",
        password: "54321",
      })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("id", 2);
        expect(response.body).toHaveProperty("name", "user1Edited");
        expect(response.body).toHaveProperty(
          "description",
          "This is bio for user1"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[success - 200] - success edit profile without changing password should be return an object with status code 201", (done) => {
    request(app)
      .put("/users/editprofile/2")
      .send({ name: "user1Edited2", description: "This is bio 2 for user1" })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("id", 2);
        expect(response.body).toHaveProperty("name", "user1Edited2");
        expect(response.body).toHaveProperty(
          "description",
          "This is bio 2 for user1"
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - edit other user profile should be return an object with status code 400", (done) => {
    request(app)
      .put("/users/editprofile/3")
      .send({
        name: "user1Edited",
        description: "This is bio for user1",
        password: "54321",
      })
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "You are unauthorized");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 400] - edit non existing profile should be return an object with status code 404", (done) => {
    request(app)
      .put("/users/editprofile/20")
      .send({
        name: "user1Edited",
        description: "This is bio for user1",
        password: "54321",
      })
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "Request Not Found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  //test untuk edit imagekit belum dibuat

});

describe("GET /users/:id", () => {
  test("[success - 200] - success get user profile by Id should be return an object with status code 200", (done) => {
    request(app)
      .get("/users/3")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("id", 3);
        expect(response.body).toHaveProperty("name", "userTest2");
        expect(response.body).toHaveProperty("username", "userTest2name");
        expect(response.body).toHaveProperty("email", "userTest2@gmail.com");
        expect(response.body).toHaveProperty("role", "user");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 404] - request Id of non existing user should be return an object with status code 404", (done) => {
    request(app)
      .get("/users/10")
      .set("access_token", userToken1)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "Request Not Found");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[failed - 404] - request Id with wrong token should be return an object with status code 404", (done) => {
    request(app)
      .get("/users/2")
      .set("access_token", userToken4)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "You are unauthorized");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe("POST /users/topup", () => {
  beforeAll(() => {
    axios.post.mockResolvedValue(
      {data: {
        token: 'initokendummy',
        redirect_url: "http://iniredirecturl"
      }})
  })

  test("topup done return token", (done) => {
    request(app)
      .post("/users/topup")
      .set("access_token", userToken2)
      .send({ amount: 50000 })
      .then((response) => {
        const result = response.body;
        console.log(result, '<<<<<<<<<<< ini result')
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("token", "initokendummy");
        expect(response.body).toHaveProperty("redirect_url", "http://iniredirecturl");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})

describe("POST /successTopUp", () => {
  test("Success Top Up should return message : Success add Balance with Amount (amount)", (done) => {
    request(app)
      .put("/users/successTopUp")
      .set("access_token", userToken2)
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body).toHaveProperty("message", "Success add Balance with Amount 50000");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
})
