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
  models.users.find({ }).exec(function(err, users) {
    if (err){
      res.status(400).send(err);
    } else {
      res.json(users);
    }
  });
};

exports.listByEmail = function(req, res)
 {
<<<<<<< HEAD
  
=======
  var email = req.params.email;
>>>>>>> cff1bcd4a6c1ac2ca95eca718378852c1bb0763a
  models.users.find({'email':email}, function(err, user)
  {
    console.log(email);
    if(err)
    {
      console.log(err);
      res.status(404).send(err);
    }
    else
    {
      res.json(user);
    }
  });
};

// exports.listByEmail = function(req, res)
//  {
//   code = req.params.email;
  
//   CourseList.find({}, function(err, courses)
//   {
//     if(err)
//     {
//       console.log(err);
//       res.status(404).send(err);
//     }
//     else
//     {
//       allCourses = [];
//       courses.forEach(function(index)
//       {

//         if(index.COURSES.length != 0 && index.COURSES != undefined)
//         {
//           if(code == index.COURSES[0].sections[0].deptCode)
//          {
//            console.log(index.COURSES[0].name);
//            allCourses.push(index.COURSES);
//          }
//         }
//       });
//       res.json(allCourses);
//     }
//   });
// };

// delete a user
exports.delete = function(req, res) {

  var user = req.user;
  user.remove(function(err){
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
