angular.module('listings').controller('ListingController', ['$scope', 'Listings', 
  function($scope, Listings) {

    /* Get all the departments, then bind it to the scope */
    Listings.getAllDepartments().then(function(response) {
      $scope.listings = response.data;
      console.log($scope.listings);
    }, function(error) {
      console.log('Unable to retrieve departments:', error);
    });
      $scope.detailedInfo = undefined;
      
      $scope.showDetails = function(index)
     {
      $scope.detailedInfo = $scope.listings[index];
    };
  }

    //Listings.getDepartmentById(index).then(function(response) {
    //  $scope.department = response.data;
    //}, function(error) {
     // console.log('Unable to retrieve department:', error);
   // });

<<<<<<< HEAD
=======
    Listings.getDepartmentById().then(function(response) {
      $scope.department = response.data;
    }, function(error) {
      console.log('Unable to retrieve department:', error);
    });
>>>>>>> 12e3f851e2fc87daa4fdd95a04f575da03ef6f80
  
    /*
    $scope.detailedInfo = undefined;

    $scope.addRating = function() {
    Listings.create($scope.newRating).then(function(response) {
        $scope.listings = response.data;
        $scope.newRating.email = '';
        $scope.newRating.rateValue = 3;
    }, function(error) {
      console.log('Unable to create rating:', error);
    });
  };
   
    $scope.drawListing = function() {
      Listings.getAll().then(function(response) {
        var listing = {};
        var stringInput = '';
        $scope.listings = response.data;
        var input = $scope.listings;
        console.log(input);
        for (var i = 0; i < input.length; i++){
          listing = input[i];
          if (i == 0) {
            stringInput = '\[\{\"type\": \"Feature\"\,\"properties\"\: \{\"description\"\: \"<strong>' + listing.name + '<br>' + '</strong> Decal: ' + listing.decal + '<br>' + ' Rating: ' + listing.rating + '<br>' + ' Updated At: ' + listing.updatedAt + '\"\,\"icon\"\: \"car\"\}\,\"geometry\"\: \{\"type\"\: \"Point\"\,\"coordinates\"\:\[' + [listing.coordinates.longitude, listing.coordinates.latitude] + '\]\}\}\,';
          }
          else if (i == (input.length-1)){
            stringInput += '\{\"type\": \"Feature\"\,\"properties\"\: \{\"description\"\: \"<strong>' + listing.name + '<br>' + '</strong> Decal: ' + listing.decal + '<br>' + ' Rating: ' + listing.rating + '<br>' + ' Updated At: ' + listing.updatedAt + '\"\,\"icon\"\: \"car\"\}\,\"geometry\"\: \{\"type\"\: \"Point\"\,\"coordinates\"\:\[' + [listing.coordinates.longitude, listing.coordinates.latitude] + '\]\}\}\]';
          }
          else{
            stringInput += '\{\"type\": \"Feature\"\,\"properties\"\: \{\"description\"\: \"<strong>' + listing.name + '<br>' + '</strong> Decal: ' + listing.decal + '<br>' + ' Rating: ' + listing.rating + '<br>' + ' Updated At: ' + listing.updatedAt + '\"\,\"icon\"\: \"car\"\}\,\"geometry\"\: \{\"type\"\: \"Point\"\,\"coordinates\"\:\[' + [listing.coordinates.longitude, listing.coordinates.latitude] + '\]\}\}\,';
          }
        }
        console.log(stringInput);
        $scope.populate = stringInput;
    });
  };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
    */

    

]);
