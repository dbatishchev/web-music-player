'use strict';

define([
    'angular',
    'jquery'
], function(angular) {
    angular.module('Music.headerSearch', [])
        .directive('ngHeaderSearch', function($location) {
            return {
                restrict: 'EA',
                terminal: true,
                replace: true,
                transclude: true,
                templateUrl: '/static/js/components/headerSearch/headerSearch.html',
                scope: {

                },
                link:function($scope, element, attrs) {
                    $scope.submitForm = function(){
                        var q = $scope.q.replace(/ /g, '+');
                        $location.path("/search/" + q);
                    }
                }
            }
        });
});