
/* Dependencies */
var mongoose = require('mongoose'),
    CourseList = require("../models/course.server.model.js");

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */


exports.getLotFromCoordinates = function(req, res){
  var coordinates = {"latitude": req.query.latitude, "longitude": req.query.longitude}
  CourseList.find({"coordinates": coordinates}, function(err, parkinglot){
    if(err){
      console.log(err);
    }
    else {
      res.json(parkinglot);
    }
  });
};

exports.getLotFromDecal = function(req, res){
  var decal = Number(req.query.decal)
  console.log(decal);
  ParkingLot.find({'decal': decal}, function(err, parkinglot){
     if(err){
      console.log(err);
    }
    else {
      res.json(parkinglot);
    }
  });
};


exports.getAll = function(req, res) {
  ParkingLot.find({}, function(err, parkinglots){
    if(err){
      console.log(err);
      res.status(404).send(err);
    }else{
      newObject = [];
      parkinglots.forEach(function(lot, index){
          newObject[index] = lot;
      });

      res.json(newObject);
    }
  });
};

exports.getInfo = function(req,res){
  var id = req.params['id']
  console.log(id);
  ParkingLot.findById(id, function(err, parkinglot){
    if(err){
      console.log(err);
    }
    res.json(parkinglot);
  });
};

exports.updateRating = function(req, res){
  var name = req.body.name
  var email = req.body.email;
  var rating = req.body.rateValue;
  ParkingLot.findOneAndUpdate({'name': name}, {'rating': rating}, function(err, parkinglot){
    if (err) throw err;
      
    console.log("Updated rating to " + name);
    });
   res.send("Updated rating in lot " + name + "!");
};