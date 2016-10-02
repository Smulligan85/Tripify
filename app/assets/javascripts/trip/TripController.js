function TripController(trips, TripService) {

  // set this to vm
  var vm = this;

  // callable attributes on the vm
  // vm.trip = trip.data;
  vm.trips = trips.data;
  vm.getTrips = getTrips;


  function getTrips() {
    return TripService.getTrips()
               .then(setTrips)

    function setTrips(tripData) {
        vm.trips = tripData.data;
    }
  }

}

angular
  .module('app')
  .controller('TripController', TripController);
