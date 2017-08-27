

let user = {
  name:'natty',
  age:35,
  sex:'male'
}


function showUser(req,res,next){
  let userData = user;
  res.userData = userData;
  next()

}


module.exports = showUser
