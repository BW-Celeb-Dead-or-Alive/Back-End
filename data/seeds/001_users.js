const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Forrest",
          password: bcrypt.hashSync("123"),
          scores: 7
        },
        {
          id: 2,
          username: "Raj",
          password: bcrypt.hashSync("123"),
          scores: 9
        },
        {
          id: 3,
          username: "David",
          password: bcrypt.hashSync("123"),
          scores: 10
        }
      ]);
    });
};
