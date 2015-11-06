(function() {
  'use strict';

  angular
    .module('RiverDeckApp.users')
    .directive('rdLoginForm', rdLoginForm);

  rdLoginForm.$inject = ['directivePath'];

  function rdLoginForm(directivePath) {
    var directive = {
      restrict: 'E',
      templateUrl: directivePath.format('users', 'rd-login-form'),
      scope: {},
      link: linkFunc,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  Controller.$inject = ['$location', 'authService', 'usersService'];

  function Controller($location, authService, usersService) {
    var vm = this;

    vm.login = _login;

    activate();

    function activate() {

    }

    function _login(service) {
      authService.requestLogin(service)
        .then(function(authData) {
          console.log('auth done', authData);
          usersService.createUser(authData).then(function() {
            $location.path('home');
          });

        })
        .catch(function(error) {
          console.log('Auth error', error);
        });
    }
  }
})();
