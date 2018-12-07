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
userID: {
	type: String,
	unique: false
	},
tableID: {
  type: String,
  unique:false
}
});

var List= new Schema({
tableID:{
  type: String,
  unique: false
  },
course:{
  deptCode: String,
  credits: String,
  name: String
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


var users = mongoose.model('newusers', User);
var departments = mongoose.model('newdepartments', Department);
var courses = mongoose.model('newcourses', Course);
var tables = mongoose.model('newtables', Table);
var lists = mongoose.model('newlists', List);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = {
  users: users,
  departments: departments,
  courses: courses,
  tables: tables,
  lists: lists
}