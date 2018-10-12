
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'fashiontrest'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};