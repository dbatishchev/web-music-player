'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.frontpage', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/js/pages/frontpage/frontpage.html',
            controller: 'FrontpageCtrl'
        });
    })

    .controller('FrontpageCtrl', function($scope, $location, $sce) {
        $.getJSON("http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=indie&api_key=ff756adbaf5b90f9d733fa0fdaae91af&format=json", function(data){
            $scope.$apply(function () {
                $scope.albums = data['topalbums']['album'];
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
