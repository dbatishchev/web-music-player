'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Universarium.frontpage', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/js/pages/frontpage/frontpage.html',
            controller: 'FrontpageCtrl'
        });
    })

    .controller('FrontpageCtrl', function($scope, Restangular, $location, $anchorScroll, $sce) {

    })
});
