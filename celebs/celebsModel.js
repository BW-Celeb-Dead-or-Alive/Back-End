const db = require("../data/dbConfig.js");

function find() {
  return db("celebs").select("id", "name", "imageurl", "dead");
}

function findById(id) {
  return db("celebs")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("celebs").where(filter);
}

function remove(id) {
  return db("celebs")
    .where("id", Number(id))
    .del();
}

function update(changes, id) {
  return db("celebs")
    .where({ id })
    .update(changes);
}

async function add(celeb) {
  const [id] = await db("celebs").insert(celeb, "id");
  return db("celebs")
    .where({ id })
    .first();
}

async function erase() {
  await db("celebs").del();
}

module.exports = {
  find,
  findById,
  findBy,
  remove,
  update,
  add,
  erase
};
