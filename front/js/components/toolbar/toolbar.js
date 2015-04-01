'use strict';

define([
    'angular',
    'jquery',
    'player'
], function(angular) {
    angular.module('Music.toolbar', ['Music.player'])
        .directive('ngToolbar', function(player, $timeout) {
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

                    $timeout(function () {
                        $("#myaudio").bind("timeupdate", function(e) {
                            var duration = this.duration;
                            var currentTime = this.currentTime;
                            var progress = Math.floor((100 / duration) * currentTime);
                            $('.progress-bar').css("width", progress+"%");
                        });
                    });

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