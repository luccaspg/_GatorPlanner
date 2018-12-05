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

router.route('/table:ID')
  .get(tables.listUserTable)
  .post(tables.create);
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

router.param('tableID', events.tableByID);
//router.param('courseID', courses.courseByID);
router.param('deptID', departments.deptByID);


module.exports = router;