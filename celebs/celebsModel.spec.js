const request = require("supertest");
const server = require("../server.js");
const app = request(server);

describe("GET /api/users", () => {
  beforeEach(done => {
    app
      .post("/api/users/login")
      .send({
        username: "iron",
        password: "maiden"
      })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  it("should give 404 error without a proper token", () => {
    return app
      .get("/api/users")
      .set("Authorization", "wrongtoken")
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});
