define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {

	var SubtabsModel = Backbone.Model.extend({
		defaults: {
			'tab' : 'parts'
		}
	});
	
	return SubtabsModel;
});
