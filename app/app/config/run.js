(function(){
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('app').run(['$rootScope','store','$location','jwtHelper', function($rootScope,store,$location,jwtHelper){
		var token = store.get('token');
		if (token!==null){
			var tokendecoded = jwtHelper.decodeToken(token);
			$rootScope.user = tokendecoded.user;
			$rootScope.location = $location;
		}
	}]);
})();