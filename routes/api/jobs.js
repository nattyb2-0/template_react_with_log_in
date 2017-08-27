

const express = require('express');
const apiJobsRoute = express.Router();


const {showJobs} = require('../../models/jobs.js')
const {createJob}= require('../../models/jobs.js')

apiJobsRoute.get('/',showJobs, (req,res,next)=>{
  res.json(res.jobResponse)
  next();
})

apiJobsRoute.post('/',createJob,(req,res,next)=>{
  res.status(200).send('post is confirmed')
})


module.exports = apiJobsRoute
