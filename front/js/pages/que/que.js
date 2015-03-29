'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.que', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/inbox', {
            templateUrl: '/static/js/pages/que/que.html',
            controller: 'QueCtrl'
        });
    })

    .controller('QueCtrl', function($scope, $location, $sce) {

    })
});
