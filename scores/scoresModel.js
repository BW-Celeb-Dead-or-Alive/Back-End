const db = require("../data/dbConfig.js");

module.exports = {
  addScores
};

function addScores(updated, id) {
  return db("users")
    .where({ id })
    .update(updated);
}
