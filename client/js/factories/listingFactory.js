angular.module('listings', []).factory('Listings', function($http) {
  var methods = {

    getAllDepartments: function() {
      return $http.get('//localhost:8080/course/dept');
    },

    getDepartmentById: function(index) {
      console.log(index);
      return $http.get('//localhost:8080/course/deptById', index)
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
