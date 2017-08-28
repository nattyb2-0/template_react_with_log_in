
// 1st step in our server process is to require our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

//initialize the express server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require('dotenv').config()
// require our middleware
const apiUserRoute = require('./routes/api/user.js')
const apiJobRoute = require('./routes/api/jobs.js')


const PORT = process.argv[2] || process.env.port || 3000;


//use our dependencies and our middlewares
//allow cross browser request and access on any routes in application as middleware
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(logger('dev'));


app.get('/',(req,res,next)=>{
  res.send('thanks for coming to this site');
  next();
})

//start using middlware of our routes
app.use('/api/users', apiUserRoute)
app.use('/api/jobs', apiJobRoute)



app.listen(PORT, ()=>{
  console.log(`ok my port is up and running and listening on ${PORT}`)
})
