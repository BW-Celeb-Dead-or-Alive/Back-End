const db = require("../data/dbConfig");

function getAll() {
  return db("users");
}

function addUser(user) {
  return db("users").insert(user);
}

module.exports = { getAll, addUser };
