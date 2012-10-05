define([
  'jquery',
  'underscore',
  'backbone',
  'models/partsModel'
], function ( $, _, Backbone, PartsModel ) {

	var PartsCollection = Backbone.Collection.extend({
		model: PartsModel
	});
	
	return PartsCollection;
});
