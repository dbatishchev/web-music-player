'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage',
    'artist',
    'album',
    'library',
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
		'Music.library',
        'Music.toolbar',
        'Music.headerSearch'
	])
        .config(function() {

        })
        .run(function($rootScope) {


        });
});