// Define paths to our dependencies
require.config({
	baseUrl: "../scripts/",

	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
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
		}
	},

  paths: {
    'jquery':     'vendor/jquery.min',
    'underscore': 'vendor/lodash.min',
    'backbone':   'vendor/backbone-min',
    'text':       'vendor/require/text',
    'typeahead':  'vendor/bootstrap/bootstrap-typeahead'
  }
});

require([

  // Load our app module and pass it to our definition function
  'app',
  'utils/localStore'

  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
//  'order!scripts/vendor/jquery.min',
//  'order!scripts/vendor/lodash.min',
//  'order!scripts/vendor/backbone-min'
  ], function( ImpactApp, localStore ) {

	ImpactApp.initialize();
  
  localStore.populate();

});
