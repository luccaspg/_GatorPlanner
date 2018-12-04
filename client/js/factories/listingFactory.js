angular.module('listings', []).factory('Listings', function($http) {
  var methods = {

    getAllDepartments: function() {
      console.log("hello");
      return $http.get('//gatorplanner.herokuapp.com/course/dept');
    },

    getDepartmentById: function() {
      return $http.get('//gatorplanner.herokuapp.com/course/deptById')
    }
  
    /*
	  create: function(rating) {
	  return $http.put('http://parkingpicker.herokuapp.com/lot', rating);
    }//, 
*/
    
    //delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
    //return $http.delete('http://localhost:8080/lot/' + id);
    //}

  };

  return methods;
});
