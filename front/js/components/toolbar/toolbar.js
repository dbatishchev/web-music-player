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
                    var audio = null;
                    var activated = false;

                    $timeout(function () {
                        audio = document.getElementById('myaudio');

                        $("#myaudio").bind("timeupdate", function(e) {
                            var duration = this.duration;
                            var currentTime = this.currentTime;
                            var progress = Math.floor((100 / duration) * currentTime);
                            $('.progress-bar-time').css("width", progress+"%");
                        });

                        $('.time-progress').click(function (e) { //Relative ( to its parent) mouse position
                            var posX = $(this).offset().left;
                            var position = e.pageX - posX;
                            var width = $('.time-progress').width();
                            var progress = Math.floor((100 / width) * position);

                            var duration = player.currentTrack.duration;

                            audio.currentTime = (duration/100) * progress;
                        });

                        $('.volume-level').click(function (e) { //Relative ( to its parent) mouse position
                            var posX = $(this).offset().left;
                            var position = e.pageX - posX;
                            var width = $('.volume-level').width();
                            var progress = Math.floor((100 / width) * position);

                            audio.volume = progress / 100;
                            $('.progress-bar-volume').css("width", progress+"%");
                        });

                        var tooglePlayer = function(){
                            if ($('.btn-play').hasClass('glyphicon-pause')){
                                audio.pause();
                            } else {
                                audio.play();
                            }
                            $('.btn-play').toggleClass('glyphicon-play');
                            $('.btn-play').toggleClass('glyphicon-pause');
                        }

                        $scope.play = function(){
                            if (!activated){
                                activated = true;
                                tooglePlayer();
                                return;
                            }
                            audio.play();
                        }
                        $scope.togglePlay = function(){
                            tooglePlayer();
                        };
                        $scope.next = function(){
                            player.nextSong();
                            $scope.play();
                        };
                        $scope.prev = function(){
                            player.prevSong();
                            $scope.play();
                        };
                        $scope.changeProgress = function(){
                            console.log('changeProgress');
                        };
                        $scope.changeVolume = function(){
                            console.log('changeVolume');
                        };
                        $scope.shuffle = function(){
                            console.log('shuffle');
                        };
                        $scope.repeat = function(){
                            console.log('repeat');
                        };

                        $scope.$watch(function () {
                            return player.src;
                        },
                        function (src) {
                            if (!src) return;
                            audio.src = src;
                            $scope.play();
                        });

                    });
                }
            }
        });
});