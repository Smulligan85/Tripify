function TripService($http) {

  this.getTrips = function() {
    return $http.get('api/v1/trips.json');
  };

  this.getTripById = function(id) {
    return $http.get('api/v1/trips/' +id+ '.json');
  };

  this.newTrip = function(tripData) {
    return $http.post('api/v1/trips.json', tripData);
  };

  this.editTrip = function(id, updatedTripData) {
    return $http.put('api/v1/trips' +id+ '.json', updatedTripData);
  };

  this.deleteTrip = function(id) {
    return $http.delete('api/v1/trips' +id+ '.json');
  };
}

angular
  .module('app')
  .service('TripService', TripService);
