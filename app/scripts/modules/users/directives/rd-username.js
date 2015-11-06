(function() {
	'use strict';

	angular
		.module('RiverDeckApp.users')
		.directive('rdUsername', rdUsername);

	rdUsername.$inject = ['directivePath'];

	function rdUsername(directivePath) {
		var directive = {
			restrict: 'E',
			templateUrl: directivePath.format('users', 'rd-username'),
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

	Controller.$inject = ['$location', 'usersService'];

	function Controller($location, usersService) {
		var vm = this;

		activate();

		function activate() {
			vm.user = usersService.getUser();
		}
	}
})();
