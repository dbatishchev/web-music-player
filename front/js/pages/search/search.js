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

        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=album.search&album="+$routeParams.q+"&api_key=ff756adbaf5b90f9d733fa0fdaae91af&format=json", function(data){
            $scope.$apply(function () {
                $scope.albums = data.results.albummatches.album;
                console.log($scope.albums);
            });
        })

        $scope.getSanitazedString = function(string){
            return string.replace(/ /g, '+')
        }

        $scope.getAlbumUrl = function(album){
            return album.artist.name.replace(/ /g, '+') + '/' + album.name.replace(/ /g, '+');
        }
    })
});
