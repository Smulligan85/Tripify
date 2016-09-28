function EditTripController(trip, $state, TripService) {
  var ctrl = this;
  ctrl.trip = trip.data;

  ctrl.editTrip = function() {
    TripService.editTrip(ctrl.trip.id, ctrl.trip);
    $state.go('home.trips');
  };
}

angular
  .module('app')
  .controller('EditTripController', EditTripController);
