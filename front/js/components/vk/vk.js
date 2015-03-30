'use strict';

define(['angular'], function(angular) {
    angular.module('Music.vk', [])
        .service('vk', function($rootScope, $q) {
            this.getAudio = function(artist, track){
                var track = track.replace(/ /g, '+');
                var artist = artist.replace(/ /g, '+');
                var q = artist + "+-+" + track;

                var deferred = $q.defer();

                var req="https://api.vk.com/method/audio.search?q="+q+"&access_token=" + accessToken;
                $.ajax({
                    url : req,
                    type : "GET",
                    dataType : "jsonp",
                    success : function(msg){
                        $rootScope.$apply( function() {
                            deferred.resolve(msg.response[1].url);
                         });
                    },
                    error:function(){
                        $rootScope.$apply( function() {
                            deferred.reject();
                        });
                    }
                });

                return deferred.promise;
            }
        });
});