var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var courseSchema = new Schema ({
	COURSES: [{
		code: {type: String, unique: true},
		courseId: {type: String, unique: true},
		name: String,
		description: String,
		prerequisites: String,
		sections: [{
			deptCode: String,
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
