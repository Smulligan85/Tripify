(function() {
  'use strict';

  var newTrip = {
    transclude: true,
    templateUrl: 'trip/new-trip.html',
    controller: NewTripController,
  };

  function NewTripController($state, TripService) {
    var ctrl = this;
    ctrl.postTrip = postTrip;
    ctrl.newMode = true;
    ctrl.closeNewForm = closeNewForm;

    function postTrip() {
      return TripService.newTrip(ctrl.trip)
                 .success(function() {
                   document.location.reload(true);
                 });

    }

    function closeNewForm() {
      document.location.reload(true);
      ctrl.newMode = false;
    }
  }
  angular
    .module('app')
    .component('newTrip', newTrip);
}());

