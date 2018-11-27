angular.module('listings', []).factory('Listings', function($http) {
  var methods = {

    getAll: function() {
      return $http.get('http://parkingpicker.herokuapp.com/lot');
    },
	
	  create: function(rating) {
	  return $http.put('http://parkingpicker.herokuapp.com/lot', rating);
    }//, 

    
    //delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
    //return $http.delete('http://localhost:8080/lot/' + id);
    //}

  };

  return methods;
});
