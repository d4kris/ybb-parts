define([
        'jquery',
        'underscore',
        'backbone',
], function ( $, _, Backbone ) {

	var TruckModelModel = Backbone.Model.extend({
		
		defaults: {
			brand:   '',
			modelId: ''
		}
	});
		
	return TruckModelModel;
});
