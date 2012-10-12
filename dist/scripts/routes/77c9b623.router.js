define([
  'jquery',
  'underscore',
  'backbone',
  'views/subtabsView', 
  'models/subtabsModel',
  'views/searchFormView',
  'models/searchFormModel'
], function($, _, Backbone, SubtabsView, SubtabsModel, SearchFormView, SearchFormModel) {
        
	var ImpactRouter = Backbone.Router.extend({

		initialize : function () {
			var subtabModel = new SubtabsModel();
			this.subtabs = new SubtabsView({ model : subtabModel });
			this.partsHandler();
		}, 
	
		routes: {
			"parts": "partsHandler",
			"parts/search": "searchForm",
			"parts/:id": "partsDetails"
		},
	
		partsHandler: function () {
			console.log("Router: partsHandler");
			this.searchForm();
		},
	
		searchForm: function () {
			// show search form, clear list
			console.log("Router: searchForm");
			if (!this.searchFormModel) {
				this.searchFormModel = new SearchFormModel();
			}
			new SearchFormView({ model : this.searchFormModel });
		},
	
		partsDetails: function () {
			// show details
		}
	});
	
  var initialize = function(){
    new ImpactRouter;
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };
});
