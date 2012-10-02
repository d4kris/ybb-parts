yeomanbbb.Routers.ApplicationRouter = Backbone.Router.extend({

	initialize : function () {
		var subtabs = new yeomanbbb.Views.SubtabsView({ "tab" : "parts" });
		this.searchForm();
	}, 

	routes: {
		"parts": "searchForm",
		"parts/search": "searchForm",
		"parts/:id": "partsDetails"
	},

	searchForm: function () {
		// show search form, clear list
		console.log("Router: searchForm");
		new yeomanbbb.Views.SearchFormView();
		// this.showView("#list", new yeomanbbb.Views.ListView({
		// 	model: new yeomanbbb.Collections.PartsCollection()
		// }));
	},

	partsDetails: function () {
		// show details
	//		this.showView("#search", new yeomanbbb.Views.SearchFormView());

	}


});
