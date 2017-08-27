

const express = require('express');
const apiJobsRoute = express.Router();


const showJobs = require('../../models/jobs.js')

apiJobsRoute.get('/',showJobs, (req,res,next)=>{
  res.json(res.jobResponse)
  next();
})


module.exports = apiJobsRoute
