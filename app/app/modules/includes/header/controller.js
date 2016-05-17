(function(){
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('app').controller('HeaderCtrl',['HEADER_MODEL','$rootScope','store','$location','$timeout',function(HEADER_MODEL,$rootScope,store,$location,$timeout){
		var vm = this;
		vm.logout = logout;

		function logout(){
			store.remove('token');
			delete $rootScope.user;
			$location.path('/login');
		}
	}]);
})();