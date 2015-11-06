;
(function() {
	'use strict';

	//Scores service used for communicating with the scores REST endpoints
	angular
		.module('RiverDeckApp.users')
		.service('usersService', usersService);

	usersService.$inject = [
		'$firebaseArray',
		'$firebaseObject',
		'$q',
		'firebaseUrl',
		'authService'
	];

	function usersService(
		$firebaseArray,
		$firebaseObject,
		$q,
		firebaseUrl,
		authService
	) {

		var _url = firebaseUrl + 'users';
		var _ref = new Firebase(_url);
		var _authData = authService.getAuth();

		this.getUser = _getUser;
		this.createUser = _createUser;

		function _getUser(id) {
			var itemRef = new Firebase(_url + '/' + (id || _authData.uid));
			return $firebaseObject(itemRef);
		}

		function _createUser(authData) {
			var deferred = $q.defer();
			var itemRef, item;
			if (!authData) {
				deferred.reject();
			} else {
				itemRef = new Firebase(_url + '/' + authData.uid + '/');
				item = $firebaseObject(itemRef);
				item.$loaded(function() {
					if (typeof item.uid === 'undefined') {
						item.uid = authData.uid
						item.provider = authData.provider;
						item.name = _getName(authData);
						item.$save();
					}
					deferred.resolve();

				});
			}
			return deferred.promise;
		}

		function _getName(authData) {
			return authData[authData.provider].displayName || 'Unknown';
		}

	}

})();
