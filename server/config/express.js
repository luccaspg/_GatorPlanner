var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    courseRouter = require('../routes/course.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  
  /**TODO
  Serve static files */
  app.use(express.static('client'));

  /**TODO 
  Use the listings router for requests to the api */
  console.log("check");
  app.use('/course', courseRouter);
  

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.get('/', function(req, res){
    res.redirect('../index.html');
  })
  return app;
};  