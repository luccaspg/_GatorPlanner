var courselist = require('../controllers/course.server.controller.js'),
    events = require('../controllers/tableController.js'),
    users = require('../controllers/userController.js'),
    login = require('../controllers/course.server.controller.js'),
    departments = require('../controllers/deptController.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
  .get(courselist.getAll)
  .put(courselist.updateRating);
router.route('/:name')
  .get(courselist.getInfo);

/* for calls to /api/functions/user */
router.route('/user')
  .post(users.create);

/* for calls to /api/functions/event */
router.route('/dept')
  .get(departments.list)
  .post(departments.create);

router.route('/deptById')
  .get(departments.deptByID);

//router.route('/event/org')
  //.get(events.listByOrganizer);

router.route('/table')
  .get(tables.listUserTable)
  .post(tables.create);

//params routes
router.route('/table/:tableID')
  .post(tables.update)
  .delete(tables.delete);

router.route('/course/:courseID')
  .delete(courses.delete)
  .post(courses.update);

router.route('/dept/:deptID')
.delete(departments.delete)
.post(departments.update);

router.param('tableID', tables.tableByID);
router.param('courseID', courses.courseByID);
router.param('deptID', departments.deptByID);


module.exports = router;