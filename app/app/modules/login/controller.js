(function(){
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('app').controller('LoginCtrl', ['LOGIN_MODEL','store','$rootScope','jwtHelper','$location', function(LOGIN_MODEL,store,$rootScope,jwtHelper,$location){
		var vm = this;
		vm.item = {
			'email':'',
			'pass':''
		};
		vm.login = login;
		function login(){
			LOGIN_MODEL.login(vm.item,function(res){
				if (!res.error) {
					store.set('token',res.token);
					var token = jwtHelper.decodeToken(res.token);
					$rootScope.user = token.user;
					$location.path('/');
				} else {
					console.info('Result: ',res);
					console.log('Login Error!');
				}
			},function(){
				console.info('Error response: ',res);
			});		
		}
	}]);
})();