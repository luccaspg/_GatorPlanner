var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express'),
    seedDB = require("../../server/seed.js");
module.exports.start = function() {
  var app = express.init();
  seedDB();
  app.listen(process.env.PORT || config.port, function() {
    console.log('App listening on port', config.port);
  });
};