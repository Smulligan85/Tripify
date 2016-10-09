function NoteService($http) {

  this.newNote = function(id, noteData) {
    return $http.post('api/v1/trips/' +id+ '/notes.json', noteData);
  };
}

angular
  .module('app')
  .service('NoteService', NoteService);
