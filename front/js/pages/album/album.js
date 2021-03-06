'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery',
    'vk',
    'player'
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

    .controller('AlbumCtrl', function($scope, $location, $sce, $routeParams, vk, player) {
        console.log($routeParams.artist);
        console.log($routeParams.album);

        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ff756adbaf5b90f9d733fa0fdaae91af&artist=" + $routeParams.artist + "&album=" + $routeParams.album + "&format=json", function(data){
            $scope.$apply(function () {
                $scope.album = data.album;
            });
        })

        $scope.addToFavorites = function(){
            $.ajax({
                url: '/add-to-favorites',
                type: 'POST',
                data: {
                    artist: $scope.album.artist,
                    album: $scope.album.name,
                    cover: $scope.album.image[4]['#text']
                },
                success: function(result) {
                    console.log(result);
                }
            });
            $.getJSON("/", function(data){
                $scope.$apply(function () {
                    $scope.album = data.album;
                });
            })
        }

        $scope.startAudio = function(track, $event){
            var $elem = $($event.target);

            for (var i = 0; i < $scope.album.tracks.track.length; i++){
                $scope.album.tracks.track[i].active = false;
            }
            track.active = true;

            console.log(track);

            vk.getAudio($routeParams.artist, track.name).then(function(response){
                player.setTrack(track, response, $routeParams.artist);
                player.playlist = $scope.album.tracks.track;

                $elem.find('.glyphicon.glyphicon-download-alt').attr({
                    href: response,
                    download: track.artist.name + " - " + track.name
                }).addClass('active');
            });


        }

        $scope.getSanitazedString = function(string){
            return string.replace(/ /g, '+')
        }

        $scope.getAlbumUrl = function(album){
            return album.artist.name.replace(/ /g, '+') + '/' + album.name.replace(/ /g, '+');
        }

        $scope.getTime = function(time){
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            return minutes + ":" + seconds;
        }

        $scope.download = function(){
            var tracks = [];
            for(var i = 0; i < $scope.album.tracks.track.length; i++){
                tracks.push($scope.getSanitazedString($scope.album.tracks.track[i].name));
            }
            var data = {
                artist: $scope.getSanitazedString($routeParams.artist),
                tracks: tracks
            };

            $.ajax({
                url: '/download',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'text',
                success: function(result) {
                    console.log(result);
                }
            });
        }
    })
});
