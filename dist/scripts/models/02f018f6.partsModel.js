define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {

	var PartsModel = Backbone.Model.extend({

		defaults: {
			heading: '',
			sections: [],
			source: '',
			title: '',
			type: '',
			
		}
	});
	
	return PartsModel;
});
