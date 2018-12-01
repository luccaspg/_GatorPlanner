var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var courseSchema = new Schema ({
	COURSES: [{
		code: String,
		courseId: String,
		name: String,
		description: String,
		prerequisites: String,
		sections: [{
			credits: String,
			instructors: [{
				name: String
			}],
			meetTimes: [{
				meetNo: String,
				meetDays: [String],
				meetTimeBegin: String,
				meetTimeEnd: String,
				meetBuilding: String,
				meetRoom: String
			}],
		}]
	}],
		  
    updatedAt: Date
});

courseSchema.pre('save', function(next){
  var currentTime = new Date();
  this.updatedAt = currentTime;
  next();
});

var CourseList = mongoose.model('CourseList', courseSchema);

module.exports = CourseList;
