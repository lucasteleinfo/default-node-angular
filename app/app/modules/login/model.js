(function(){
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('app').factory('LOGIN_MODEL', ['$http','APP_SETTINGS', function($http,APP_SETTINGS){
		return {
			login:function(item,success,error){
				$http.post(APP_SETTINGS.URL_API+'user/signin',item).success(success).error(error);
			},
		};
	}]);
})();