define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/subtabsTemplate.html'
  ], function ( $, _, Backbone, subtabsTemplate ) {

	var SubtabsView = Backbone.View.extend({

	  el: '#subtabs',
	
	  // events: {
	  //   "click .search:" : "searchForm"
	  // },
	
		initialize: function(){
	  	console.log("subtabsView initialize");
	    this.template = _.template( subtabsTemplate );
	    _.bindAll(this, "render");
	    this.render();
	  },
	
	
	  render: function(){
	    console.log("subtabsView rendering");
	    this.$el.html(this.template(this.model.toJSON()));
	    return this;
	  }
	
	});
	
	return SubtabsView;
});
