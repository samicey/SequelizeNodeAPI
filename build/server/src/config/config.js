"use strict";

require('dotenv').config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: process.env.DATABASE_URI,
  //   dialect:'postgres'
  // },
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    database: 'airports_test',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
//# sourceMappingURL=config.js.map