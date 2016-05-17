(function(){
	'use strict';
	angular.module('app').config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
		$routeProvider
		.when('/',{
			'controller':'HomeCtrl',
			'controllerAs':'vm',
			'templateUrl':'views/home.view.html',
			'resolve':{
				check:verify
			}
		})
		.when('/login',{
			'controller':'LoginCtrl',
			'controllerAs':'vm',
			'templateUrl':'views/login.view.html',
			'resolve':{
				check:verifylogin
			}
		})
		.otherwise({
            redirectTo: '/'
        });
		function verify($rootScope,$location){
	    if(typeof $rootScope.user === 'undefined'){
	        $location.path('/login');
	    }
	    }
	    function verifylogin($rootScope,$location){
		    if(typeof $rootScope.user !== 'undefined'){
		        $location.path('/');
		    }
	    }
	}]);
})();