(function() {
  'use strict';

  var newTrip = {
    transclude: true,
    templateUrl: 'trip/new-trip.html',
    controller: NewTripController,
  };

  function NewTripController($state, TripService) {
    var ctrl = this;

    function postNewTrip() {
      return TripService.newTrip(ctrl.trip)
                 .success(function() {
                   document.location.reload(true);
                 });

    }
  }
  angular
    .module('app')
    .component('newTrip', newTrip);
}());

