/* eslint-disable arrow-body-style */
const path = require('path');

const dbPath = path.join(config.path.app, '/config/db');
const db = require(dbPath);

const tableUsers = 'USERS as u';

const User = {
  list: async (limit, offset) => {
    // List active users
    const columns = {
      id: 'id',
      firstname: 'firstname',
      lastname: 'lastname',
      username: 'username',
    };

    const where = {
      is_deleted: 0,
    };

    const defaultOffset = offset || 0;

    return db.read(tableUsers)
      .select(columns)
      .where(where)
      .limit(limit)
      .offset(defaultOffset);
  },
};

module.exports = User;
