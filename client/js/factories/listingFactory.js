angular.module('listings', []).factory('Listings', function($http) {
  var methods = {

    getAllDepartments: function() {
      return $http.get('//ufgatorplanner.herokuapp.com/course/dept');
    },

    getDepartmentById: function(selectedDepartment) {
      return $http.get('//ufgatorplanner.herokuapp.com/course/deptById', selectedDepartment)
    }

  };

  return methods;
});
