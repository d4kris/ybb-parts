define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {

	var SearchFormModel = Backbone.Model.extend({
		defaults: {
			'chassisID_1' : '',
			'chassisID_2' : '',
			'vin' : '',
			'model' : '',
			'functionGroup' : '' 
		}
	});
	
	return SearchFormModel;
});
