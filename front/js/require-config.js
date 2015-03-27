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
        jquery: 'lib/jquery/dist/jquery.min',
		angular: 'lib/angular/angular',
		angularRoute: 'lib/angular-route/angular-route',
		angularMocks: 'lib/angular-mocks/angular-mocks',
        angularTouch: 'lib/angular-touch/angular-touch',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap.min',
        text: 'lib/requirejs-text/text',
        underscore: 'lib/underscore/underscore-min',
        frontpage: 'js/pages/frontpage/frontpage'

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

    insertRequire: ['js/main'],
    name: 'js/main',
    optimize: 'none',
    wrap: true
});

require([
        'angular',
        'js/main'
    ], function(angular, app) {
        angular.element().ready(function() {
            angular.bootstrap(document, ['Music']);
        });
    }
);