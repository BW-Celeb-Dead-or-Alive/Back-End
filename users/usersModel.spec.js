const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("../index");
const test = request(server);
const { addUser } = require("./usersModel.js");

describe("users model", function() {
  describe("addUser()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert a user", async function() {
      await addUser({ username: "forrest", password: 123 });

      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should insert this specific user", async function() {
      await addUser({ username: "forrest", password: 123 });
      await addUser({ username: "levi", password: 123 });

      const users = await db("users");

      expect(users).toHaveLength(2);
      expect(users[0].username).toBe("forrest");
      expect(users[1].username).toBe("levi");
    });
  });
});

it("getting a specific celebrity comes back as 200 OK", async () => {
  const res = await request(server).get("/api/celebs/1");
  expect(res.status).toBe(200);
});

// it("Registers a user", done => {
//   return test
//     .post("api/users/register")
//     .send({
//       username: "Joe",
//       password: "Mama"
//     })
//     .expect(200, done);
// });
