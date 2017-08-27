// require express server and initialize express router from express module
const express = require('express');
const apiUserRoute = express.Router();

//middleware for the get route
const showUser = require('../../models/user.js')


apiUserRoute.get('/', showUser, (req,res,next)=>{
 res.json(res.userData)
})


module.exports = apiUserRoute;
