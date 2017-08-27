// require express server and initialize express router from express module
const express = require('express');
const apiUserRoute = express.Router();



apiUserRoute.get('/', (req,res,next)=>{
  res.json({
    name:'natty'
  })
})


module.exports = apiUserRoute;
