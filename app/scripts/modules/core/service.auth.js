;
(function() {
  'use strict';

	//Scores service used for communicating with the scores REST endpoints
	angular
		.module('RiverDeckApp.core')
		.service('authService', authService);

	authService.$inject = ['$firebaseAuth', 'firebaseUrl'];
	function authService($firebaseAuth, firebaseUrl) {

	  var _ref = new Firebase(firebaseUrl),
			authRef = $firebaseAuth(_ref);

		this.getRef = _getRef;
		this.getAuth = _getAuth;
		this.logout = _logout;
		this.requestLogin = _requestLogin;

    function _getRef() {
      return authRef;
    }

    function  _getAuth() {
      return authRef.$getAuth();
    }

    function _logout() {
      authRef.$unauth();
    }

    function _requestLogin(loginType) {
      return authRef.$authWithOAuthPopup(loginType);
    }

  }

})();
