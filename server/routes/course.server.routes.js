var courselist = require('../controllers/course.server.controller.js'),
    tables = require('../controllers/tableController.js'),
    users = require('../controllers/userController.js'),
    departments = require('../controllers/deptController.js'),
    express = require('express'), 
    router = express.Router();

    /*
router.route('/')
  .get(courselist.getAll)
  .put(courselist.updateRating);
router.route('/:name')
  .get(courselist.getInfo);
  */

/* for calls to /api/functions/user */
router.route('/user/:email')
.get(users.listByEmail)
  // .post(users.create);
  console.log("router email");

/* for calls to /api/functions/event */
router.route('/dept')
  .get(departments.list)
  .post(departments.create);
  console.log("router");

router.route('/:CODE')
  .get(courselist.coursesByCode)
  //.post(departments.create);
  console.log("router");

router.route('/deptById')
  .get(departments.deptByID);

//router.route('/event/org')
  //.get(events.listByOrganizer);

router.route('/table/:ID')
  //.get(tables.listUserTable)
  .post(tables.create);

  router.route('/user/:email/:fname/:lname/:password')
  .post(users.createUser);

  // router.route('/user/name/:email/:newfname')
  // .put(users.updateUser);

  // router.route('/user/lname/:email/:newlname')
  // .put(users.updateUser);

  // router.route('/user/pswchg/:email/:newpsw')
  // .put(users.updateUser);
  router.route('/user/:id/:fname/:lname/:password')
  .put(users.updateUser);

  router.route('/user/:id')
  .delete(users.delete);

  // router.route('/prereq/:code/:newcode')
  // .post(courselist.updatePrereq);


  router.route('/department/:courseCode/:deptCode')
  .get(courselist.getCourse);

  router.route('/:id')
  .get(courselist.getCourseById);

  // router.route('/:deptCode/:courseCode/:courseName/:prereq/:credits/:description')
  // .put(courselist.updateCourse);

  //working route example
  //localhost:8080/course/19140000/CIS4930/Special Topics/Prereq: CAP 3027/3/Combines the traditional media production pipeline and software engineering processes to synthesize an approach geared for the production of works incorporating both artistic and computational elements. 
   router.route('/:deptCode/:courseCode/:courseName/:prereq/:credits/:description')
  .put(courselist.updateCourse);

  router.put('/:id/:newcode', function(req, res, next) {
    courselist.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
/*
//params routes
router.route('/table/:tableID')
  .post(events.update)
  .delete(events.delete);
*/
/*
router.route('/course/:courseID')
  .delete(courselist.delete)
  .post(courselist.update);

  /*
router.route('/dept/:deptID')
.delete(departments.delete)
.post(departments.update);
*/
//Luccas messing up with CRUD
// router.post('/user/:email/:fname/:lname/:password', function(req, res){
//   var data = {
//     "email": req.params.email,
//     "password": req.params.password,
//     "fname": req.params.fname,
//     "lname": req.params.lname,
//     "isAdmin" : false
//   };
//   res.status(200).send.json(data);
// });

// router.post('/user/:email/:fname/:lname/:password', function(req, res){
//   users.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });

// });

router.param('tableID', tables.tableByID);
//router.param('courseID', courses.courseByID);
router.param('deptID', departments.deptByID);


module.exports = router;