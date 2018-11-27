var courselist = require('../controllers/course.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
  .get(courselist.getAll)
  .put(courselist.updateRating);
router.route('/:name')
  .get(courselist.getInfo);
 

router.route('/coordinates')
  .get(courselist.getLotFromCoordinates);


router.route('/decal')
	.get(courselist.getLotFromDecal);

module.exports = router;