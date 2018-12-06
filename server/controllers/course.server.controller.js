
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


/*exports.getLotFromCoordinates = function(req, res){
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
*/
/*
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

*/
exports.coursesByCode = function(req, res)
 {
  code = req.params.CODE;
  
  CourseList.find({}, function(err, courses)
  {
    if(err)
    {
      console.log(err);
      res.status(404).send(err);
    }
    else
    {
      allCourses = [];
      courses.forEach(function(index)
      {

        if(index.COURSES.length != 0 && index.COURSES != undefined)
        {
          if(code == index.COURSES[0].sections[0].deptCode)
         {
           console.log(index.COURSES[0].name);
           allCourses.push(index.COURSES);
         }
        }
      });
      res.json(allCourses);
    }
  });
};

exports.getAll = function(req, res) {
  CourseList.find({}, function(err, courses){
    if(err){
      console.log(err);
      res.status(404).send(err);
    }else{
      newObject = [];
      courses.forEach(function(course, index){
          newObject[index] = course;
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


// exports.updatePrereq = function(req, res){
//   var old = req.params.code;
//   var newcode = req.params.newcode;
//   CourseList.findById(old, function(err, CourseList){
//     if(!CourseList)
//     console.log("error");
//     else{
//       CourseList.prerequisite = newcode;

//       CourseList.save().then(CourseList => {
//         res.json('Update complete');
//     })
//     .catch(err => {
//           res.status(400).send("unable to update the database");
//     });
//     }
//   })
// 
// };

// exports.getCourse = function(req, res)
//  {
  
//   var code = req.params.courseCode;
//   model.CourseList.find({'code':code}, function(err, code)
//   {
//     console.log(code);
//     if(err)
//     {
//       console.log(err);
//       res.status(404).send(err);
//     }
//     else
//     {
//       res.json(code);
//     }
//   });
// };

exports.getCourse = function(req, res){
  code = req.params.deptCode;
  courseCode = req.params.courseCode;
  
  CourseList.find({}, function(err, courses)
  {
    if(err)
    {
      console.log(err);
      res.status(404).send(err);
    }
    else
    {
      allCourses = [];
      courses.forEach(function(index)
      {

        if(index.COURSES.length != 0 && index.COURSES != undefined)
        {
          if(code == index.COURSES[0].sections[0].deptCode)
         {
           console.log(index.COURSES[0].name);
           allCourses.push(index.COURSES);
         }
        }
      });
      var chosenCourse;
      for(var i = 0; i < allCourses[0].length; i++){
        // console.log(allCourses[0][i].code);
        if(allCourses[0][i].code == courseCode){
          chosenCourse = allCourses[0][i];
          break;
        }

      }
      res.json(chosenCourse);
    }
  });
};

exports.getCourseById = function(req, res, next, id) {
  CourseList.CourseList.COURSES.findById(req.params.id), (function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.user = user;
      res.json(event);
      next();
    }
  });
};



exports.updateCourse = function(req, res){
  code = req.params.deptCode;
  courseCode = req.params.courseCode;
  courseName = req.params.courseName;
  prereq = req.params.prereq;
  credits = req.params.credits;
  description = req.params.description;
  
  CourseList.find({}, function(err, courses)
  {
    if(err)
    {
      console.log(err);
      res.status(404).send(err);
    }
    else
    {
      allCourses = [];
      courses.forEach(function(index)
      {

        if(index.COURSES.length != 0 && index.COURSES != undefined)
        {
          if(code == index.COURSES[0].sections[0].deptCode)
         {
          var j = 0;
          for(var i = 0; i < index.COURSES.length; i++){
            console.log(index.COURSES[i].name);
            if(index.COURSES[i].code == courseCode){
              j = i;
            }
          }

          // index.COURSES[j].code = courseCode;
          index.COURSES[j].name = courseName;
          index.COURSES[j].prerequisites = prereq;
          index.COURSES[j].sections[0].credits = credits;
          index.COURSES[j].description = description;

          console.log(index.COURSES[j].name);

          index.save().then(index =>{
            res.json(index.COURSES[j]);
          })
          .catch(err =>{
            // res.status(400).send('not working');
          });
          
         }
        }
      });
      // var chosenCourse;
      // for(var i = 0; i < allCourses[0].length; i++){
      //   // console.log(allCourses[0][i].code);
      //   if(allCourses[0][i].code == courseCode){
      //     chosenCourse = allCourses[0][i];
      //     allCourses[0][i].code = courseCode;
      //     allCourses[0][i].name = courseName;
      //     allCourses[0][i].prerequisites = prereq;
      //     allCourses[0][i].sections[0].credits = credits;
      //     allCourses[0][i].description = description;

      //     console.log(allCourses[0][i]);

      //     allCourses[0][i].save().then(allCourses =>{
      //       res.json('updated');
      //     })
      //     .catch(err =>{
      //       // res.status(400).send('not working');
      //     });
      //     break;
      //   }
      // }
      // //update
      


      res.json("updated");
    }
  });
};

// exports.updateCourse = function(req, res){
//   CourseList.CourseList.findById(req.params.courseCode, function(err, user){
//     if(!user)
//       return next(new Error('not found'));
//     else{
//         console.log(user);

//         user.save().then(user =>{
//           res.json('updated');
//         })
//         .catch(err =>{
//           res.status(400).send('not working');
//         });
//     }
//   });




// };