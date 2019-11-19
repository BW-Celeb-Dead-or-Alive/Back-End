exports.up = function(knex) {
  return knex.schema.createTable("celebs", celebs => {
    celebs.increments();

    celebs
      .string("name")
      .notNullable()
      .unique();

    celebs.string("imageurl").notNullable();

    celebs
      .boolean("dead")
      .notNullable()
      .defaultTo(0)
      .toString();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("celebs");
};
