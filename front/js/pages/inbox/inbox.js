'use strict';

define([
    'angularRoute',
    'bootstrap',
    'jquery'
], function() {
angular.module('Music.inbox', [
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider.when('/inbox', {
            templateUrl: '/static/js/pages/inbox/inbox.html',
            controller: 'InboxCtrl'
        });
    })

    .controller('InboxCtrl', function($scope, $location, $sce) {

    })
});
