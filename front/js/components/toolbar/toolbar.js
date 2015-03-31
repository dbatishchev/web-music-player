'use strict';

define(['angular'], function(angular) {
    angular.module('Music.toolbar', [])
        .directive('ngToolbar', function($timeout) {
            return {
                restrict: 'EA',
                terminal: true,
                replace: true,
                transclude: true,
                templateUrl: '/static/js/components/toolbar/toolbar.html',
                scope: {

                },
                link:function($scope, element, attrs) {
                    var audio = document.getElementById('myaudio');

                    $scope.togglePlay = function(){
                        console.log('toggle');
                    }
                    $scope.next = function(){
                        console.log('next');
                    }
                    $scope.prev = function(){
                        console.log('prev');
                    }
                    $scope.changeProgress = function(){
                        console.log('changeProgress');
                    }
                    $scope.changeVolume = function(){
                        console.log('changeVolume');
                    }
                    $scope.shuffle = function(){
                        console.log('shuffle');
                    }
                    $scope.repeat = function(){
                        console.log('repeat');
                    }
                }
            }
        });
});