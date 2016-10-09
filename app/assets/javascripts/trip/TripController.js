function TripController(trips) {

  // set this to vm
  var vm = this;

  // callable attributes on the vm
  vm.trips = trips.data;
}

angular
  .module('app')
  .controller('TripController', TripController);
