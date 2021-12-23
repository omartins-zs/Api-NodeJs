module.exports = {
  client: "mysql2",
  connection: {
    database: "apinode",
    user: "root",
    password: "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migration: {
    tableName: "knex_migrations",
  },
};
