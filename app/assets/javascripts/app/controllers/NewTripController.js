function NewTripController($state, TripService) {
  var ctrl = this;
  ctrl.trip = {};

  ctrl.postTrip = function() {
    TripService.newTrip(ctrl.trip).then(function(trip) {
    if(trip.data.size) {
      ctrl.error = trip.data.size[0];
    } else {
      $state.go('home.trips');
    }
  });
  };
}

angular
  .module('app')
  .controller('NewTripController', NewTripController);
