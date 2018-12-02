
var mongoose = require('mongoose'),
  models = require('../models/model.js');

/* Create a department */
exports.create = function(req, res) {

  var department = new models.departments(req.body);
  event.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(department);
    }
  });
};

//list all departments
exports.list = function(req, res) {
  console.log("hello");
  models.departments.find({ }).exec(function(err, departments) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(departments);
    }
  });
};


// delete an event
exports.delete = function(req, res) {

  var department = req.department;
  department.remove(function(err){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      console.log("department deleted");
    }
  });
};

//update department
exports.update = function(req, res) {
  var department = req.department;

  department.CODE = req.body.CODE;
  department.DESC = req.body.DESC;


  event.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(department);
    }
  });
};

exports.deptByID = function(req, res, next, id) {
  models.departments.findById(id).exec(function(err, department) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.department = department;
      next();
    }
  });
};
