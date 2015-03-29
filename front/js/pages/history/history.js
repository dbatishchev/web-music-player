'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.history', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/history', {
            templateUrl: '/static/js/pages/history/history.html',
            controller: 'HistoryCtrl'
        });
    })

    .controller('HistoryCtrl', function($scope, $location, $sce) {

    })
});
