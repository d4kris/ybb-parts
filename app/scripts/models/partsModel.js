define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {

	var PartsModel = Backbone.Model.extend({

		defaults: {
			chassiID: '',
			name: '',
			model: ''
		}
	});
	
	return PartsModel;
});
