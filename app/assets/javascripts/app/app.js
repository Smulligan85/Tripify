angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        // controller: 'HomeController as home'
      })
      .state ('home.flights', {
        url: 'flights',
        templateUrl: 'home/flights.html',
        // controller: 'FlightsController as flights'
      })
      .state('home.notes', {
        url:'notes',
        templateUrl: 'home/notes.html',
        // controller: 'NotesController as notes'
      });
      $urlRouterProvider.otherwise('/');
  });
