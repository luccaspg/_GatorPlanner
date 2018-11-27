var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var parkingLotSchema = new Schema ({
	name: {
		type: String,
		required: true
	},

	coordinates: {
    	latitude: Number,
   		longitude: Number
  	},

    decal: {
      type: String
    },

  	rating: {
  		type: Number,
        min: 1,
        max: 5
	},
		  
    updatedAt: Date
});

parkingLotSchema.pre('save', function(next){
  var currentTime = new Date();
  this.updatedAt = currentTime;
  next();
});

var ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;
