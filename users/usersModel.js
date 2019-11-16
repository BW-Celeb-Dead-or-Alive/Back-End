const db = require("../data/dbConfig");

function getAll() {
  return db("users");
}

function findBy(where) {
  return db("users").where(where);
}

function findByUsername(username) {
  return findBy({ username }).first();
}

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => id);
}

module.exports = { getAll, addUser, findBy, findByUsername };
