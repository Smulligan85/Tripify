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

    // function trips() {
    //   return TripService.getTrips();
    // }

    function dateValidator() {
      // var tripCollection = trips();
      TripService.getTrips().then(function(trip) {
        trip.data.forEach(function(trip) {
          if (ctrl.trip.departDate >= trip.depart_date && ctrl.trip.depart_date <= trip.return_date || ctrl.trip.return_date >= trip.depart_date && ctrl.trip.return_date <= trip.return_date) {
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

