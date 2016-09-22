function TripController(trip) {
  ctrl = this;
  ctrl.trip = trip.data;
}

angular
  .module('app')
  .controller('TripController', TripController);
