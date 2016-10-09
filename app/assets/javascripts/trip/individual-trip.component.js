(function() {
  'use strict';

  var individualTrip = {
    transclude: true,
    templateUrl: 'trip/individual-trip.html',
    controller: IndividualTripController,
    bindings: {
      trip: '=',
      parentController: '='
    }
  };

  function IndividualTripController($state, TripService) {
    var ctrl = this;


    ctrl.readMode = true;
    ctrl.editMode = false;
    ctrl.startEditMode = startEditMode;
    ctrl.updateTrip = updateTrip;

    function startEditMode() {
      ctrl.editableTrip = ctrl.trip;
      ctrl.readMode = false;
      ctrl.editMode = true;
    }

    function updateTrip() {
      return TripService.editTrip(ctrl.editableTrip.id, ctrl.editableTrip)
                 .success(function() {
                   document.location.reload(true);
                 });

    }
  }
  angular
    .module('app')
    .component('individualTrip', individualTrip);
}());
