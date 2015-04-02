'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage',
    'artist',
    'album',
    'search',
    'toolbar',
    'headerSearch'
], function(angular) {
	return angular.module('Music', [
		'ngRoute',
		'Music.frontpage',
		'Music.artist',
		'Music.album',
		'Music.search',
        'Music.toolbar',
        'Music.headerSearch'
	])
        .config(function() {

        })
        .run(function($rootScope) {


        });
});