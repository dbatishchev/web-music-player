'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage',
    'artist',
    'album',
    'toolbar'
], function(angular) {
	return angular.module('Music', [
		'ngRoute',
		'Music.frontpage',
		'Music.artist',
		'Music.album',
        'Music.toolbar'
	])
        .config(function() {

        })
        .run(function($rootScope) {


        });
});