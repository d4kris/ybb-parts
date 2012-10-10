define([
  'jquery',
  'underscore',
  'backbone',
  'models/functionGroup'
], function ( $, _, Backbone, FunctionGroup ) {

	var FunctionGroups = Backbone.Collections.extend({
		model: FunctionGroup
	});
	
	return FunctionGroups;
});
