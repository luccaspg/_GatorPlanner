var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  tableID: {
    type: String,
    required: false,
    unique: true
  },
  fname: {
  	type: String,
  	required: true	
  },
  lname: {
  	type: String,
  	required: true
  }
});


var Department = new Schema({
CODE: {
	type: String,
	required: true,
	unique: true
	},
DESC: {
	type: String,
	required: true,
	unique: true
}
});

var Table = new Schema({
tableID: {
	type: String,
	required: true,
	unique: true
	},
courseID: {
	type: String,
	required: true,
	unique: true
},
section: {
	type: String,
	required: true,
	unique: true
}
});

var Course= new Schema({
code: {
	type: String,
	required: true,
	unique: true
	//check for method of creation
},
 deptCode: {
 	type: String,
 	required: true,
 },
name: {
	type: String,
	required: true,
},
// time: {
// 	type: Number,
// 	required: false
// }
description: {
	type: String,
	required: false
},
//courseNum: {
//	type: String,
//	required: true,
//	unique: true
//}
credits:{
	type: Number,
	required: true
},
instructor:{
	type: String,
	required: true
}
});


var users = mongoose.model('newUser', User);
var departments = mongoose.model('newDepartment', Department);
var courses = mongoose.model('newCourse', Course);
var tables = mongoose.model('newTable', Table);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = {
  users: users,
  departments: departments,
  courses: courses,
  tables: tables
}