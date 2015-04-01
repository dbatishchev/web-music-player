'use strict';

define(['angular'], function(angular) {
    angular.module('Music.player', [])
        .service('player', function() {
            this.playlist = [];
            this.currentId = null;
            this.currentTrack = null;

            this.setPlaylist = function(){

            };
            this.setTrack = function(){

            };
        });
});