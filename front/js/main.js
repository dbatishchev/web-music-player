'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage',
    'artist',
    'album'
], function(angular) {
	return angular.module('Music', [
		'ngRoute',
		'Music.frontpage',
		'Music.artist',
		'Music.album'
	])
        .config(function() {

        })
        .run(function($rootScope) {


        });
});