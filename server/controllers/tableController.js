var mongoose = require('mongoose').set('debug',true),
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
//table is the list of tables
  // var table = models.tables.findById(req.params.ID);
  var index = req.params.index;
  var code = req.params.code;
  var data = [{"deptCode" :"Test",
  "credits" :"3",
  "name": code
}];
  //  models.tables.courses();
  var addCourse = data;
  

  models.tables.findById(req.params.ID, function(err, table){
    if(!table)
      return (new Error('not found'));
    else{
      if(req.params.add_delete == 1 && table.courses.length < 8){
        // var newTable = new models.tables(table);
        // table.courses.insert(addCourse);
        table.courses.push(addCourse[0])
        
        table.courses[table.courses.length-1].name = code;
        // table.courses[table.courses.length-1]._id;

        console.log(addCourse);   
        console.log( table.courses[1]._id);  
        console.log(table);
        
      }
      
      else if (req.params.add_delete == 0){
        table.courses.remove(index);
        console.log(table);
      }

      // table.update({ _id: req.params.ID }, { '$push': { courses: [ { deptCode: 'Test', credits: '3', name: 'COP3530' } ] }, '$inc': { __v: 2 } }, function(err, doc){res.json("done");});
        table.save()
        .then(table =>{
          console.log('updated');
          res.json('updated');
        })
        .catch(err =>{
          res.status(400).send('not working');
        });
    }
  });

  // table.userID = req.body.userID;
  // table.name= req.body.name;
  //1 for add 0 for delete course
  // console.log(table);
  // console.log()  
  // table.save(function(err) {
  //   if (err) {
  //     console.log(err);
  //     res.status(400).send(err);
  //   } else {
  //     res.json(table);
  //   }
  // });
};

exports.tableByID = function(req, res, next, id) {
  models.tables.findById(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.table = event;
      next();
    }
  });
};
