
// require the pg module for connection o our database
// database name istemplatereactlogin
const postgres = require('pg-promise')({});

//for enviromental vars
require('dotenv').config()

//craete our database confiqurations
const postgresConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database : 'templatereactlogin',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

//initialize our postgress instance and assign to a variablw
const database = postgres(postgresConfig);

//export database module
module.exports = database;
