'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery',
    'vk'
], function() {
angular.module('Music.album', [
    'ngRoute',
    'Music.vk'
])
    .config(function($routeProvider) {
        $routeProvider.when('/artist/:artist/album/:album', {
            templateUrl: '/static/js/pages/album/album.html',
            controller: 'AlbumCtrl'
        });
    })

    .controller('AlbumCtrl', function($scope, $location, $sce, $routeParams, vk) {
        console.log($routeParams.artist);
        console.log($routeParams.album);

        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ff756adbaf5b90f9d733fa0fdaae91af&artist=" + $routeParams.artist + "&album=" + $routeParams.album + "&format=json", function(data){
            $scope.$apply(function () {
                $scope.album = data.album;
            });
        })

        $scope.startAudio = function(track){
            vk.getAudio($routeParams.artist, track).then(function(response){
                console.log(response);

                var oAudio = document.getElementById('myaudio');
                var audioURL = document.getElementById('audiofile');
                oAudio.src = response;

                console.log(oAudio);

                oAudio.play();
            });
        }

        $scope.getSanitazedString = function(string){
            return string.replace(/ /g, '+')
        }

        $scope.getAlbumUrl = function(album){
            return album.artist.name.replace(/ /g, '+') + '/' + album.name.replace(/ /g, '+');
        }
    })
});
