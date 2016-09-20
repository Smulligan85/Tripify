angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as home'
      })
      .state ('home.trips', {
        url: 'trips',
        templateUrl: 'trips/index.html',
        controller: 'TripsController as trips'
      })
      .state('home.new', {
        url:'trip/new',
        templateUrl: 'trips/new.html',
        controller: 'NewTripController as trip'
      })
      .state('home.trip', {
        url:'trip/:id',
        templateUrl: 'trips/show.html',
        controller: 'TripController as trip'
      })
      .state('home.edit', {
        url:'trip/:id/edit',
        templateUrl: 'trips/edit.html',
        controller: 'EditTripController as editTrip'
      });
      $urlRouterProvider.otherwise('/');
  });
