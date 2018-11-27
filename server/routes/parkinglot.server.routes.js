var parkinglot = require('../controllers/parkinglot.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
  .get(parkinglot.getAll)
  .put(parkinglot.updateRating);
router.route('/:name')
  .get(parkinglot.getInfo);
 

router.route('/coordinates')
  .get(parkinglot.getLotFromCoordinates);


router.route('/decal')
	.get(parkinglot.getLotFromDecal);

module.exports = router;