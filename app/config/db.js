
const knex = require('knex');

const db = {
  write: {
    client: config.db_driver,
    connection: {
      host: config.db_main_host,
      user: config.db_main_user,
      password: config.db_main_password,
      database: config.db_main_name,
    },
  },
  read: {
    client: config.db_driver,
    connection: {
      host: config.db_read_host,
      user: config.db_read_user,
      password: config.db_read_password,
      database: config.db_read_name,
    },
  },
};

const dbConfig = {
  write: knex(db.write),
  read: knex(db.read),
};

module.exports = dbConfig;
