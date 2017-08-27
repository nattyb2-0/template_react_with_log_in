
// 1st step in our server process is to require our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

//initialize the express server
const app = express();
const PORT = process.argv[2] || process.env.port || 3000;


app.listen(PORT, ()=>{
  console.log(`ok my port is up and running and listening on ${PORT}`)
})
