'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.album', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/artist/:artist/album/:album', {
            templateUrl: '/static/js/pages/album/album.html',
            controller: 'AlbumCtrl'
        });
    })

    .controller('AlbumCtrl', function($scope, $location, $sce, $routeParams) {
        console.log($routeParams.artist);
        console.log($routeParams.album);

        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ff756adbaf5b90f9d733fa0fdaae91af&artist=" + $routeParams.artist + "&album=" + $routeParams.album + "&format=json", function(data){
            $scope.$apply(function () {
                $scope.album = data.album;
            });
        })

        /*
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + $routeParams.artist + "&api_key=ff756adbaf5b90f9d733fa0fdaae91af&format=json", function(data){
            $scope.$apply(function () {
                console.log(data);
                $scope.albums = data.topalbums.album;
            });
        })*/

        $scope.getSanitazedString = function(string){
            return string.replace(/ /g, '+')
        }

        $scope.getAlbumUrl = function(album){
            return album.artist.name.replace(/ /g, '+') + '/' + album.name.replace(/ /g, '+');
        }
    })
});
