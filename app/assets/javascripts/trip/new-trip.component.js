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
    ctrl.runDateValidator = runDateValidator;
    // dateValidator = dateValidator;
    // postTrip = postTrip;


    function dateValidator() {
      return TripService.getTrips()
                        .then(checkTrips)

      function checkTrips(trips) {
        trips.data.forEach(function(trip) {
          var dYear = trip.depart_date.split("-")[0];
          var dMonth = trip.depart_date.split("-")[1] - 1;
          var dDay = trip.depart_date.split("-")[2].slice(0, 2);
          var dDate = new Date(dYear, dMonth, dDay);

          var rYear = trip.return_date.split("-")[0];
          var rMonth = trip.return_date.split("-")[1] - 1;
          var rDay = trip.return_date.split("-")[2].slice(0, 2);
          var rDate = new Date(rYear, rMonth, rDay);

          if (ctrl.trip.depart_date >= dDate && ctrl.trip.depart_date <= rDate || ctrl.trip.return_date >= dDate && ctrl.trip.return_date <= rDate) {
            return true;
          }
        })
      }

    }

    function runDateValidator() {
      if (dateValidator()) {
        alert("date not valid");
      } else {
        postTrip();
      }
    }

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
