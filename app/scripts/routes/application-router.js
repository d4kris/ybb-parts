yeomanbbb.Routers.ApplicationRouter = Backbone.Router.extend({

	initialize : function () {
		this.subtabs = new yeomanbbb.Views.SubtabsView({ "tab" : "parts" });
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
			this.searchFormModel = new yeomanbbb.Models.SearchFormModel();
		}
		new yeomanbbb.Views.SearchFormView({ model : this.searchFormModel });
	},

	partsDetails: function () {
		// show details
	//		this.showView("#search", new yeomanbbb.Views.SearchFormView());

	}


});
