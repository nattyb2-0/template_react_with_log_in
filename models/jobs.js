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


module.exports = showJobs;
