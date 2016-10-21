(function() {
  'use strict';

function TripController(trips) {

  var vm = this;
  vm.dateOrder = dateOrder;

  vm.trips = trips.data.sort(function(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
     return 0;
  }
  });

  function dateOrder() {
    vm.trips = trips.data.sort(function(a, b) {
      if (a.depart_date < b.depart_date) {
        return -1;
      } else if (a.depart_date > b.depart_date) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

angular
  .module('app')
  .controller('TripController', TripController);
}());
