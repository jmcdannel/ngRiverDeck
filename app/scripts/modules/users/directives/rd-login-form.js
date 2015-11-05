(function() {
    'use strict';

    angular
        .module('RiverDeckApp.core')
        .directive('rdLoginForm', rdLoginForm);

    rdLoginForm.$inject = ['directivePath'];
    function rdLoginForm(directivePath) {
        var directive = {
            restrict: 'EA',
            templateUrl: directivePath.format('users', 'rd-login-form'),
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$location', 'authService'];
    function Controller($location, authService) {
        var vm = this;

        vm.login = _login;

        activate();

        function activate() {

        }

        function _login(service) {
          authService.requestLogin(service)
            .then(function(authData) {
              console.log('auth done', authData);
              //userService.createUser(authData).then(function() {
                $location.path('scores/list');
              //});

            })
            .catch(function(error) {
              console.log('Auth error', error);
            });
        }
    }
})();
