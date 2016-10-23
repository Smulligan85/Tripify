(function() {
  'use strict';

  var newTrip = {
    transclude: true,
    templateUrl: 'trip/new-trip.html',
    controller: NewTripController
  };

  function NewTripController(TripService) {
    var ctrl = this;
    ctrl.postTrip = postTrip;
    ctrl.newMode = true;
    ctrl.closeNewForm = closeNewForm;
    dateValidator = dateValidator;

    function dateValidator() {
      TripService.getTrips().then(function(trip) {
        trip.data.forEach(function(trip) {
          if (ctrl.trip.depart_date.toDateString() >= trip.depart_date && ctrl.trip.depart_date.toDateString() <= trip.return_date || ctrl.trip.return_date.toDateString() >= trip.depart_date && ctrl.trip.return_date.toDateString() <= trip.return_date) {
            return true;
          }
      });
      });
    }

    function postTrip() {
      if (dateValidator()) {
        document.location.reload(true);
      } else {
        return TripService.newTrip(ctrl.trip)
                  .success(function() {
                    document.location.reload(true);
                  });
      }
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

