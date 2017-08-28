const database = require('../database/connection.js')

// let jobs = [
//   {
//     company:'coca-cola',
//     position:'clerk',
//     location:'mamba Point'
//   },
//   {
//     company:'pepsi',
//     position:'admin assistant',
//     location:'west Point'
//   }
// ]

function showJobs(req,res,next){
  database.any('SELECT * FROM jobs ORDER BY jobs.date_created DESC;')
  .then((jobResponse)=>{
    res.jobResponse = jobResponse;
    next();
  })
  .catch(err=> {
    console.log(`the error in this showjobs function is ${err}`);
    next(err)
  })
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
