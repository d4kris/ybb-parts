define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/subtabsTemplate.html'
  ], function ( $, _, Backbone, subtabsTemplate ) {

	var SubtabsView = Backbone.View.extend({

	  el: '#subtabs',
	  /* Which tab user is currently on */
	  tab: 'parts', 
	
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
	    this.$el.html(this.template(this));
	    return this;
	  }
	
	});
	
	return SubtabsView;
});
