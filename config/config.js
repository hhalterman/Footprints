require("dotenv").config();

module.exports = {
    "development": {
      "username": process.env.DATABASE_USERNAME,
      "password": process.env.DATABASE_PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.DATABASE_HOST,
      "dialect": process.env.DATABASE_DIALECT
    },
    "test": {
      "username": process.env.DATABASE_USERNAME,
      "password": process.env.DATABASE_PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.DATABASE_HOST,
      "dialect": process.env.DATABASE_DIALECT,
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": process.env.DATABASE_DIALECT,
    }
  }

