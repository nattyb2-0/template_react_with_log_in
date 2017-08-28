
//require our database module to connect to database and perform queries
const database = require('../database/connection.js');

const bcrypt = require('bcryptjs');
//dummy data to use for response in test
// let user = {
//   name:'natty',
//   age:35,
//   sex:'male'
// }

require('dotenv').config()

function showListers(req,res,next){
  // let userData = user;
  // res.userData = userData;
  // next()

  database.any('SELECT * FROM listers ;')
  .then(userResponse =>{
    res.userData = userResponse;
    next()
  })
  .catch(err=>{
    console.log(`this is the error in show user function ${err}`)
    next(err)
  })

}


function createListers(req,res,next){
   const SALTROUNDS = 10;

 //create user function to hold user dat from request
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    socialmedia: req.body.socialmedia,
    email: req.body.email,
    // password: req.body.password
    password: bcrypt.hashSync(req.body.password, SALTROUNDS)

  }

  console.log(user);
  console.log(req.body)

  console.log(process.env.DB_DATABSE,process.env.DB_HOST,process.env.DB_PORT,process.env.DB_USER)
//query the database to add user
  database.none(`INSERT INTO listers(firstname,lastname,address,phonenumber,socialmedia,email,password)
     VALUES('${user.firstname}','${user.lastname}','${user.address}',
     '${user.phonenumber}','${user.socialmedia}','${user.email}','${user.password}');`)
  .then(next())
  .catch(err=> next(err))
}


module.exports = {showListers,createListers}
