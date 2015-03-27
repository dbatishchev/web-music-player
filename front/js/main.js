'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage'
], function(angular) {
	return angular.module('Music', [
		'ngRoute',
		'Music.frontpage'
	])
        .config(function() {

        })
        .run(function($rootScope) {


        });
});