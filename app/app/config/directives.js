(function () {
    'use strict';
    angular.module('app').directive('dropdownDir', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).dropdown(scope.$eval(attrs.dropdownDir));
            }
        };
    }).directive('dimmerDir', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).dimmer(scope.$eval(attrs.dimmerDir));
            }
        };
    }).directive('accordionDir', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).accordion(scope.$eval(attrs.accordionDir));
            }
        };
    }).directive('embedDir', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).embed(scope.$eval(attrs.embedDir));
            }
        };
    }).directive('loadingDir',['$http' ,function ($http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }]).directive('activeDir',['$location','$animate',function($location,$animate) {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                var type = scope.$eval(attrs.activeDir);
                if (type.url == $location.url()) {
                    $animate.addClass(element,'active');
//                    $(element).addClass('active');
                }
            }
        };
    }]);
})();