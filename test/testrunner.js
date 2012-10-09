/*globals require*/
'use strict';

// Set the require.js configuration file for your application
require.config({

  baseUrl: '.',

  deps: ['main'],

  paths: {
    'src':          '../app/scripts',
    'jasmine':      'lib/jasmine-1.2.0/jasmine.min',
    'jasmine-html': 'lib/jasmine-1.2.0/jasmine-html.min',
    'jasmine-jquery': 'lib/jasmine-1.2.0/jasmine-jquery-1.3.1',
    'jquery':     	'../app/scripts/vendor/jquery.min',
    'underscore': 	'../app/scripts/vendor/lodash.min',
    'backbone':   	'../app/scripts/vendor/backbone-min',
    'text':       	'../app/scripts/vendor/require/text',
    'models':     	'../app/scripts/models',
    'collections': 	'../app/scripts/collections',
    'views':     	  '../app/scripts/views'
  },

  shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
    jasmine: {
      deps: ['jquery'],
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine-html'
    },
    'jasmine-jquery': {
      deps: ['jquery'],
      exports: 'jasmine-jquery'
    },
  }

});

