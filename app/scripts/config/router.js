;
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
    .module('RiverDeckApp.core').config(function($stateProvider, $urlRouterProvider, viewPath) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

        /**
         * LOGIN
         */
        .state('login', {
          url: '/login',
          views: {
            'content': { templateUrl: templatePath.format('core', 'layout') }
          }
        })

        /**
         * HOME
         */
        .state('home', {
          url: '/',
          views: {
            'content': { templateUrl: templatePath.format('core', 'layout') }
          }
        })


    });

})();
