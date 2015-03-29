'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.artist', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/artist/:artist', {
            templateUrl: '/static/js/pages/artist/artist.html',
            controller: 'ArtistCtrl'
        });
    })

    .controller('ArtistCtrl', function($scope, $location, $sce, $routeParams) {
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + $routeParams.artist + "&api_key=ff756adbaf5b90f9d733fa0fdaae91af&format=json", function(data){
            $scope.$apply(function () {
                $scope.artist = data.artist;
            });
        })
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + $routeParams.artist + "&api_key=ff756adbaf5b90f9d733fa0fdaae91af&format=json", function(data){
            $scope.$apply(function () {
                console.log(data);
                $scope.albums = data.topalbums.album;
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
