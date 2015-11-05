; // jshint ignore:line
(function() {
  'use strict';

  angular
    .module('RiverDeckApp.core').run(["$rootScope", "$location", function($rootScope, $location) {
      $rootScope.$on("$routeChangeError", function(event, next, previous,
        error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        console.log('routeChangeError', arguments);
        if (error === "AUTH_REQUIRED") {
          $location.path("/login");
        }
      });
  }]);

  angular
    .module('RiverDeckApp.core').config(function($stateProvider, $urlRouterProvider) {

      var viewPath = 'views/{0}/views/{1}.html';
      var requireAuth = ['authService', function(authService) {
        return authService.getRef().$requireAuth();
      }];
      // var waitForAuth = ['authService', function(authService) {
      //   return authService.getRef().$waitForAuth();
      // }];

      $urlRouterProvider.otherwise('/login');

      $stateProvider

        /**
         * LOGIN
         */
        .state('login', {
          url: '/login',
          views: {
            'content': { templateUrl: viewPath.format('users', 'layout') }
          }
        })

        /**
         * HOME
         */
        .state('home', {
          url: '/home',
          views: {
            'content': {
              templateUrl: viewPath.format('core', 'layout'),
              resolve: { 'currentAuth': requireAuth }
            }
          }
        });


    });

})();
