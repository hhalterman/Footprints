require("dotenv").config();

module.exports = {
    "development": {
      "username": process.env.DATABASE_USERNAME,
      "password": process.env.DATABASE_PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.DATABASE_HOST,
      "dialect": 'mysql'
    },
    "test": {
      "username": process.env.DATABASE_USERNAME,
      "password": process.env.DATABASE_PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.DATABASE_HOST,
      "dialect": 'mysql',
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": 'mysql'
    }
  }

