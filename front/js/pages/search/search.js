'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery',
    'vk',
    'player'
], function() {
angular.module('Music.search', [
    'ngRoute',
    'Music.vk'
])
    .config(function($routeProvider) {
        $routeProvider.when('/search/:q', {
            templateUrl: '/static/js/pages/search/search.html',
            controller: 'SearchCtrl'
        });
    })

    .controller('SearchCtrl', function($scope, $location, $sce, $routeParams, vk, player) {
        console.log($routeParams.q);

    })
});
