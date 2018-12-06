var mongoose = require('mongoose'),
  models = require('../models/model.js');

/* Create a table */
exports.create = function(req, res) {
  console.log('creating');
  var table = new models.tables();
  var ID = req.params.ID;
  console.log(ID);
  table.userID = ID;
  //table._id = 5;
  table.save(function(err) {
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
  models.tables.find().exec(function(err, table) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(table);
    }
  });
};

exports.listUserTable = function(req, res){
  var id = req.params.ID;  //get org name from logged in user
  console.log("looking for table owned by " + id);
  models.tables.find({ userID: id }).exec(function(err, tables) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(tables);
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

  table.userID = req.body.userID;
  table.name= req.body.name;

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
