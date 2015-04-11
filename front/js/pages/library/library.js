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
        console.log('!!!');

        $.getJSON("/add-to-favorites", function(data){
            $scope.$apply(function () {
                $scope.albums = data['albums'];
                console.log('!!!');
            });
        })

        $scope.getSanitazedString = function(string){
            return string.replace(/ /g, '+')
        }

        $scope.getAlbumUrl = function(album){
            return album.artist.replace(/ /g, '+') + '/' + album.album.replace(/ /g, '+');
        }
    })
});
