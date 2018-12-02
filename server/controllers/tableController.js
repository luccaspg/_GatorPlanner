var mongoose = require('mongoose'),
  models = require('../models/model.js');

/* Create a table */
exports.create = function(req, res) {

  var table = new models.tables(req.body);
  user.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(table);
    }
  });
};

//list all tables
exports.list = function(req, res) {
  models.tables.find({ }).exec(function(err, users) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(tables);
    }
  });
};

exports.listUserTable = function(req, res){
  var id = req.user.tableID;  //get org name from logged in user
  console.log("looking for table owned by " + tableID);
  models.tables.find({ tableID: id }).exec(function(err, tables) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(table);
    }
  });
}
// delete a table
exports.delete = function(req, res) {

  var table = req.table;
  table.remove(function(err){
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    else{
      console.log("table deleted");
    }
  });
};

//update table
exports.update = function(req, res) {

  var table = req.table;

  table.tableID = req.body.tableID;
  table.courseID= req.body.courseID;
  table.section = req.body.section;


  table.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(table);
    }
  });
};

exports.tableByID = function(req, res, next, id) {
  models.tables.findById(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.table = table;
      next();
    }
  });
};
