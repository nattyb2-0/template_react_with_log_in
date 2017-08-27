const database = require('../database/connection.js')

let jobs = [
  {
    company:'coca-cola',
    position:'clerk',
    location:'mamba Point'
  },
  {
    company:'pepsi',
    position:'admin assistant',
    location:'west Point'
  }
]

function showJobs(req,res,next){

  res.jobResponse = jobs;
  next();
}

function createJob(req,res,next){
  const job = {
    company : req.body.companyName,
    position: req.body.position,
    location: req.body.location,
    date_created: new Date()
  }

  database.none(`INSERT INTO jobs(company,position,location,date_created)
    VALUES($/company/,$/position/,$/location/,$/date_created/);`, job)
  .then(next())
  .catch(err=> next(err))



}

module.exports = {showJobs,createJob};
