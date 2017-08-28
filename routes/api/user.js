// require express server and initialize express router from express module
const express = require('express');
const apiUserRoute = express.Router();

//middleware for the get route
const {showListers} = require('../../models/user.js')

//middleware for post route
const {createListers} = require('../../models/user.js')

apiUserRoute.get('/', showListers, (req,res,next)=>{
 res.json(res.userData)
 next()
})

apiUserRoute.post('/', createListers, (req,res,next)=>{
  res.status(200).send('post action performed')
  next()
})


module.exports = apiUserRoute;
