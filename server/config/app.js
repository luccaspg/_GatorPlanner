var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express'),
    //populateDB = require("../../server/populate.js");
    createDB = require("../../server/departments.js");

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.PORT || config.port, function() {
    console.log('App listening on port', config.port);
  });
};