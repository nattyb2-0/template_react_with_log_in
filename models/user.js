
//require our database module to connect to database and perform queries
const database = require('../database/connection.js');

//dummy data to use for response in test
let user = {
  name:'natty',
  age:35,
  sex:'male'
}

require('dotenv').config()

function showUser(req,res,next){
  let userData = user;
  res.userData = userData;
  next()

}


function createUser(req,res,next){
 //create user function to hold user dat from request
  const user = {
    email: req.body.email,
    password: req.body.password
  }

  console.log(process.env.DB_DATABSE,process.env.DB_HOST,process.env.DB_PORT,process.env.DB_USER)
//query the database to add user
  database.none(`INSERT INTO users(email,password)
    VALUES($/email/, $/password/);`, user)
  .then(next())
  .catch(err=> next(err))
}


module.exports = {showUser,createUser}
