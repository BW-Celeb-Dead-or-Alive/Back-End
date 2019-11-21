exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.integer("scores").defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("scores");
  });
};
