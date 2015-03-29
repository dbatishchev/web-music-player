'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.library', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/library', {
            templateUrl: '/static/js/pages/library/library.html',
            controller: 'LibraryCtrl'
        });
    })

    .controller('LibraryCtrl', function($scope, $location, $sce) {

    })
});
