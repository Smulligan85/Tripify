function TripsController(trips) {
  ctrl = this;
  ctrl.trips = trips.data;
}

angular
  .module('app')
  .controller('TripsController', TripsController);
