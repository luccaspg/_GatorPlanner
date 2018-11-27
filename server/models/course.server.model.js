var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var courseSchema = new Schema ({
	COURSES: [{
		code: String,
		courseId: String,
		name: String,
		description: String,
		prerequisites: String,
		sections: {
			credits: Number,
			instructors: [{
				name: String
			}]
		}
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
