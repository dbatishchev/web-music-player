'use strict';

define([
	'angular',
	'angularRoute',
    'frontpage'
], function(angular) {
	return angular.module('Universarium', [
		'ngRoute',
		'Universarium.frontpage'
	])
        .config(function(RestangularProvider) {

        })
        .run(function($rootScope, Restangular) {


        });
});