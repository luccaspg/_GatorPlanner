var mongoose = require('mongoose'),
  models = require('../models/model.js');
  

/* Create a table */
exports.create = function(req, res) {
  console.log('creating');

  var list = new models.lists();
  var ID = req.params.ID;
  var code = req.params.code;
  var credits = req.params.credits;
  var name = req.params.name;

  list.tableID = ID;
  list.course.deptCode = code;
  list.course.credits = credits;
  list.course.name = name;

  console.log(ID);
  console.log(code);
  console.log(credits);
  console.log(name);



  //table._id = 5;
  list.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(list);
    }
  });
};

//list all tables
exports.getList = function(req, res){
  var id = req.params.ID;  //get org name from logged in user
  console.log("looking for table owned by " + id);
  models.lists.find({ tableID : id }).exec(function(err, lists) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(lists);
    }
  });
}

// delete a table
exports.delete = function(req, res) {

  var id = req.params.ID;  //get org name from logged in user
  console.log("looking for table owned by " + id);
  models.lists.remove({ _id : id }).exec(function(err, lists) {
    if (err){
      res.status(400).send(err);
    } else {
      console.log("deleted");
      res.json(lists);
    }
  });
}

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

exports.listByID = function(req, res, next, id) {
  models.lists.find(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.list = event;
      next();
    }
  });
};