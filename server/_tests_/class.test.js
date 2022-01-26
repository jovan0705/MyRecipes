const request = require("supertest");
const app = require("../app");
const { User, Class } = require("../models");
const { hashPassword, decryptPassword } = require("../helpers/bcrypt");
const axios = require('axios')

jest.mock("axios");
jest.setTimeout(10000);

let adminToken = "";
let userToken = "";
let userToken2 = "";

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
    })
    .then((_) => done())
    .catch((err) => done(err));
});

beforeAll((done) => {
    User.create({
      name: "user1",
      username: "user1name",
      email: "user1@gmail.com",
      password: "user1",
      role: "user",
      balance: 500000,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then(async (_) => {
        const response = await request(app)
          .post("/login")
          .send({ emailOrUsername: "user1@gmail.com", password: "user1" });
        userToken = response.body.accessToken;
      })
      .then((_) => done())
      .catch((err) => done(err));
  });

  beforeAll((done) => {
    User.create({
      name: "user2",
      username: "user2name",
      email: "user2@gmail.com",
      password: "user2",
      role: "user",
      balance: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then(async (_) => {
        const response = await request(app)
          .post("/login")
          .send({ emailOrUsername: "user2@gmail.com", password: "user2" });
        userToken2 = response.body.accessToken;
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
      Class.destroy({
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

describe("GET /class", () => {
  test("GET / return array of class objects", (done) => {
    request(app)
      .get("/class")
      .set("access_token", adminToken)
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(200);
        expect(result).toBeInstanceOf(Array);
        done();
      });
  });

  test("Error - GET / return Invalid Access Token", (done) => {
    request(app)
      .get("/class")
      .then((response) => {
        const result = response.body;
        expect(response.status).toEqual(400);
        expect(result).toBeInstanceOf(Object);
        expect(result.message).toBe('Invalid Access Token')
        done();
      });
  });
});

describe("POST /class", () => {  
    beforeAll(() => {
        axios.post.mockResolvedValue({data: {url: 'http://inigambar'}})
      });

    test("POST /add return added object (class)", (done) => {
      request(app)
        .post("/class/add")
        .set("access_token", adminToken)
        .field("name", "Baguette")
        .field("link", "http://inilinkzoom.hehe")
        .field("date", "2023-01-23")
        .field("price", 50000)
        .attach("imageFile", "test_asset/hehe.jpg")
        .then((response) => {
          const result = response.body;
          expect(response.status).toEqual(201);
          expect(result).toBeInstanceOf(Object);
          done();
        });
    });

    test("Error - POST /add return Invalid Access Token", (done) => {
        request(app)
          .post("/class/add")
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });

    test("Error - POST /add return Validation notEmpty on name failed", (done) => {
        request(app)
          .post("/class/add")
          .set("access_token", adminToken)
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class.name cannot be null')
            done();
          });
      });

    test("Error - POST /add return Validation notEmpty on link failed", (done) => {
        request(app)
          .post("/class/add")
          .set("access_token", adminToken)
          .field("name", "Baguette")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class.link cannot be null')
            done();
          });
      });

    test("Error - POST /add return Class.image cannot be null", (done) => {
        request(app)
          .post("/class/add")
          .set("access_token", adminToken)
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class.image cannot be null')
            done();
          });
      });

    test("Error - POST /add return Validation notEmpty on price failed", (done) => {
        request(app)
          .post("/class/add")
          .set("access_token", adminToken)
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23",)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class.price cannot be null')
            done();
          });
      });
  
  });

  describe("PUT /class/edit/:classId", () => {  
    test("PUT /edit/:classId return edited object (class)", (done) => {
        request(app)
          .put("/class/edit/1")
          .set("access_token", adminToken)
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            done();
          });
      });     

      test("Error - PUT /edit/:classId return Invalid Access Token", (done) => {
        request(app)
          .put("/class/edit/1")
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .attach("imageFile", "test_asset/hehe.jpg")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });

      test("PUT /edit/:classId return edited object (class) (without new Image)", (done) => {
        request(app)
          .put("/class/edit/1")
          .set("access_token", adminToken)
          .field("name", "Baguette")
          .field("link", "http://inilinkzoom.hehe")
          .field("date", "2023-01-23")
          .field("price", 50000)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Success Update class with id 1')
            done();
          });
      });
  })

  

  describe("User Register Class", () => {  
    test("POST /register/:classId return object message", (done) => {
        request(app)
          .post("/class/register/1")
          .set("access_token", userToken)
          .then((response) => {
              console.log('hehe')
            const result = response.body;
            expect(response.status).toEqual(201);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Success register Class');
            done();
          });
      });
    
      test("Error - POST /register/:classId return object message", (done) => {
        request(app)
          .post("/class/register/1")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });
      
      test("Error - POST /register/:classId return object message", (done) => {
        request(app)
          .post("/class/register/1")
          .set("access_token", userToken2)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Balance not Enough');
            done();
          });
      });

      test("Error - POST /register/:classId return object message", (done) => {
        request(app)
          .post("/class/register/1")
          .set("access_token", userToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class already Registered');
            done();
          });
      });
  })

  describe("DELETE - User Cancel Class", () => {  
    test("DELETE /cancel/:classId", (done) => {
        request(app)
          .delete("/class/cancel/1")
          .set("access_token", userToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Success Cancel Class');
            done();
          });
      });

      test("DELETE /cancel/:classId", (done) => {
        request(app)
          .delete("/class/cancel/1")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });

      test("DELETE /cancel/:classId", (done) => {
        request(app)
          .delete("/class/cancel/2")
          .set("access_token", userToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class not Found');
            done();
          });
      });
  })

  describe("GET -  Class Detail", () => {  
    test("GET /detail/:classId", (done) => {
        request(app)
          .get("/class/detail/1")
          .set("access_token", adminToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            done();
          });
      });

      test("GET /detail/:classId", (done) => {
        request(app)
          .get("/class/detail/1")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });
  })

  describe("GET - User Classes", () => {  
    test("GET /myClass", (done) => {
        request(app)
          .get("/class/myClass")
          .set("access_token", adminToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            done();
          });
      });

      test("GET /myClass", (done) => {
        request(app)
          .get("/class/myClass")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });
  })

  describe("DELETE /class/delete/:classId", () => {  
    test("DELETE /delete/:classId return object message", (done) => {
        request(app)
          .delete("/class/delete/1")
          .set("access_token", adminToken)
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(200);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Class with id 1 deleted successfully');
            done();
          });
      });

      test("DELETE /delete/:classId return object message", (done) => {
        request(app)
          .delete("/class/delete/1")
          .then((response) => {
            const result = response.body;
            expect(response.status).toEqual(400);
            expect(result).toBeInstanceOf(Object);
            expect(result.message).toBe('Invalid Access Token')
            done();
          });
      });
  })



