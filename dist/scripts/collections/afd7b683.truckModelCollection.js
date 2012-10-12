define([
  'jquery',
  'underscore',
  'backbone',
  'models/truckModelModel'
], function ( $, _, Backbone, Model ) {

	var TruckModelCollection = Backbone.Collection.extend({
		model: Model
	});
	
	return TruckModelCollection;
});
