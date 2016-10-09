function TripController($state, trips, TripService) {

  // set this to vm
  var vm = this;

  // callable attributes on the vm
  vm.trip = {};
  vm.trips = trips.data;
  vm.getTrips = getTrips;
  // vm.postTrip = postTrip;

  function getTrips() {
    return TripService.getTrips()
               .then(setTrips);

    function setTrips(tripData) {
        vm.trips = tripData.data;
    }
  }
}

angular
  .module('app')
  .controller('TripController', TripController);
