var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express'),
    ciseDB = require("../../server/cise.js");
    eceDB = require("../../server/ece.js");
module.exports.start = function() {
  var app = express.init();
  ciseDB();
  eceDB();
  app.listen(process.env.PORT || config.port, function() {
    console.log('App listening on port', config.port);
  });
};