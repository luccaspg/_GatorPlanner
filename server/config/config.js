//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
   // uri: 'mongodb://commonfiginc:c0mm0nf1g1nc@ds035787.mlab.com:35787/commonfiginc', //place the URI of your mongo database here.
   uri: 'mongodb://lamj:test123@ds143143.mlab.com:43143/lotsdb' 
   //uri: 'mongodb://localhost/ParkingPicker'
  }, 
  port: process.env.PORT || 8080
};