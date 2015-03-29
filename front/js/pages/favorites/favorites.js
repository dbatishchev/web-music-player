'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.favorites', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/favorites', {
            templateUrl: '/static/js/pages/favorites/favorites.html',
            controller: 'FavoritesCtrl'
        });
    })

    .controller('FavoritesCtrl', function($scope, $location, $sce) {

    })
});
