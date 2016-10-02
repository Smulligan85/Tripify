angular
  .module('app', ['ui.router', 'ngResource', 'ngMessages', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController as vm'
      })
      .state('home.landing', {
        url: 'landing',
        templateUrl: 'landing/landing.html',
        controller: 'LandingController as vm'
      })
      .state('home.trips', {
        url: 'trips',
        templateUrl: 'trip/trips.html',
        controller: 'TripController as vm',
        resolve: {
          trips: function(TripService) {
            return TripService.getTrips();
          }
        }
      })
      .state('home.new', {
        url:'trip/new',
        templateUrl: 'trip/new.html',
        controller: 'TripController as vm'
      })
      .state('home.trip', {
        url:'trip/:id',
        templateUrl: 'trip/show.html',
        controller: 'TripController as vm',
      })
      .state('home.edit', {
        url:'trip/:id/edit',
        templateUrl: 'trip/edit.html',
        controller: 'TripController as vm',
      });
      $urlRouterProvider.otherwise('/landing');
  });
