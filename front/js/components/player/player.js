'use strict';

define([
        'angular',
        'vk'
    ], function(angular) {
    angular.module('Music.player', [])
        .service('player', function(vk) {
            this.playlist = [];
            this.current = null;
            this.currentTrack = null;
            this.src = null;
            this.artist = null;

            this.setPlaylist = function(){

            };
            this.setTrack = function(track, src, artist){
                this.currentTrack = track;
                this.src = src;
                this.artist = artist;
            };
            this.nextSong = function(){
                for(var i = 0; i < this.playlist.length; i++){
                    if (this.playlist[i].active){
                        if (i+1 <= this.playlist.length){
                            this.playlist[i].active = false;
                            this.playlist[i+1].active = true;
                            this.currentTrack = this.playlist[i+1];

                            var that = this;

                            vk.getAudio(this.artist, this.currentTrack.name).then(function(response){
                                that.src = response;
                            });
                        } else {
                            this.playlist[i].active = false;
                            this.playlist[0].active = true;
                            this.currentTrack = this.playlist[0];

                            var that = this;

                            vk.getAudio(this.artist, this.currentTrack.name).then(function(response){
                                that.src = response;
                            });
                        }

                        break;
                    }
                }
            }
            this.prevSong = function(){
                for(var i = 0; i < this.playlist.length; i++){
                    if (this.playlist[i].active){
                        if (i-1 <= this.playlist.length && i-1 >= 0){
                            this.playlist[i].active = false;
                            this.playlist[i-1].active = true;
                            this.currentTrack = this.playlist[i-1];

                            var that = this;

                            vk.getAudio(this.artist, this.currentTrack.name).then(function(response){
                                that.src = response;
                            });
                        } else {
                            this.playlist[i].active = false;
                            this.playlist[this.playlist.length - 1].active = true;
                            this.currentTrack = this.playlist[this.playlist.length - 1];

                            var that = this;

                            vk.getAudio(this.artist, this.currentTrack.name).then(function(response){
                                that.src = response;
                            });
                        }


                        break;
                    }
                }
            }
        });
});