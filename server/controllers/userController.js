var mongoose = require('mongoose'),
  models = require('../models/model.js');

/* Create a user */
exports.create = function(req, res) {

  var user = new models.users(req.body);
  user.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

//list all users
exports.list = function(req, res) {
  models.courses.find({ }).exec(function(err, users) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(users);
    }
  });
};


// delete a user
exports.delete = function(req, res) {

  var user = req.user;
  course.remove(function(err){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      console.log("user deleted");
    }
  });
};

//update user
exports.update = function(req, res) {

  var user = req.user;

  user.email = req.body.email;
  user.password = req.body.password;
  user.isAdmin = req.body.isAdmin;
  user.tableID = req.body.tableID;
  user.fname = req.body.fname;
  user.lname = req.body.lname;


  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

exports.userByID = function(req, res, next, id) {
  models.users.findById(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.user = user;
      next();
    }
  });
};