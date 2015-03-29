'use strict';

if(window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function(path) {
        return path.replace(/^\/base\/dist\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (TEST_REGEXP.test(file)) {
            allTestFiles.push(pathToModule(file));
        }
    });
}

require.config({
	paths: {
        jquery: '/static/lib/jquery/dist/jquery.min',
		angular: '/static/lib/angular/angular',
		angularRoute: '/static/lib/angular-route/angular-route',
		angularMocks: '/static/lib/angular-mocks/angular-mocks',
        angularTouch: '/static/lib/angular-touch/angular-touch',
        bootstrap: '/static/lib/bootstrap/dist/js/bootstrap.min',
        text: '/static/lib/requirejs-text/text',
        underscore: '/static/lib/underscore/underscore-min',
        frontpage: '/static/js/pages/frontpage/frontpage',
        artist: '/static/js/pages/artist/artist',
        album: '/static/js/pages/album/album',
        toolbar: '/static/js/components/toolbar/toolbar',
        lastfm: '/static/js/components/lastfm/lastfm',
        vk: '/static/js/components/vk/vk',
        player: '/static/js/components/player/player'
	},
	shim: {
		angular : {'exports' : 'angular'},
        angularRoute: ['angular'],
        angularTouch: ['angular'],
        angularMocks: {
            deps: ['angular'],
            exports: 'angular.mock'
        },
        bootstrap: ['jquery']
	},
	priority: [
		"angular"
	],

    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/dist' : '',

    insertRequire: ['static/js/main'],
    name: 'static/js/main',
    optimize: 'none',
    wrap: true
});

require([
        'angular',
        'static/js/main'
    ], function(angular, app) {
        angular.element().ready(function() {
            angular.bootstrap(document, ['Music']);
        });
    }
);