'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.people', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/people', {
            templateUrl: '/static/js/pages/people/people.html',
            controller: 'PeopleCtrl'
        });
    })

    .controller('PeopleCtrl', function($scope, $location, $sce) {

    })
});
