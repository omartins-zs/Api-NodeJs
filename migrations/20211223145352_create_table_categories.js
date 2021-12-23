exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("image").notNull();
    table.string("teste").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
