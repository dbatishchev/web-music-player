'use strict';

define(['angular'], function(angular) {
    angular.module('Music.toolbar', [])
        .directive('ngToolbar', function($timeout) {
            return {
                restrict: 'EA',
                terminal: true,
                replace: true,
                transclude: true,
                templateUrl: '/static/js/components/toolbar/toolbar.html',
                scope: {

                }
            }
        });
});