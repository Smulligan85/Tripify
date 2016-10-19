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

  function IndividualTripController(TripService, NoteService) {
    var ctrl = this;

    ctrl.listMode = true;
    ctrl.readMode = false;
    ctrl.editMode = false;
    ctrl.noteMode = false;
    ctrl.editableTrip = ctrl.trip;
    ctrl.toggleReadMode = toggleReadMode;
    ctrl.toggleEditMode = toggleEditMode;
    ctrl.startNoteMode = startNoteMode;
    ctrl.closeNoteMode = closeNoteMode;
    ctrl.updateTrip = updateTrip;
    ctrl.addNote = addNote;
    ctrl.destroyTrip = destroyTrip;
    ctrl.noteData = {};

    function toggleReadMode() {
      ctrl.readMode = !ctrl.readMode;
    }

    function toggleEditMode() {
      ctrl.readMode = !ctrl.readMode;
      ctrl.editMode = !ctrl.editMode;
    }

    function startNoteMode() {
      ctrl.noteMode = true;
    }

    function closeNoteMode() {
      ctrl.noteMode = false;
    }

    function updateTrip() {
      return TripService.editTrip(ctrl.editableTrip.id, ctrl.editableTrip)
              .success(function() {
                document.location.reload(true);
              });

    }

    function addNote() {
      ctrl.noteData.name = ctrl.trip.noteTitle;
      ctrl.noteData.body = ctrl.trip.noteBody;
      return NoteService.newNote(ctrl.editableTrip.id, ctrl.noteData)
              .success(function() {
                document.location.reload(true);
              });
    }

    function destroyTrip() {
      return TripService.deleteTrip(ctrl.editableTrip.id)
              .success(function() {
                document.location.reload(true);
              });
    }
  }
  angular
    .module('app')
    .component('individualTrip', individualTrip);
}());
