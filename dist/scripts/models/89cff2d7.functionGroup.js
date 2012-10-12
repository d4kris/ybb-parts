define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {

	var FunctionGroup = Backbone.Model.extend({
		defaults: {
			"desc" : "",
			"id" : "",
			"label" : ""
		}
	});
	
	return FunctionGroup;
});
