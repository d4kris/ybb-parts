define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/listHeaderTemplate.html',
  'text!templates/listItemTemplate.html'
  ], function ( $, _, Backbone, ListHeaderTemplate, ListItemTemplate ) {

	var ListView = Backbone.View.extend({

	  tagName : "table",
	  className : "table table-bordered",
	
		initialize : function() {
	  	console.log("List view initialize");
	    this.template = _.template( ListHeaderTemplate );
	    
	    this.model.bind("reset", this.render, this);
	    this.model.bind("add", this.appendNewPart, this);
	    this.render();
	  },
	
	  render : function() {
	    console.log("List view rendering");
	    this.appendHeader();
	    _.each(this.model.models, function(part) {
	        this.appendNewPart(part);
	      }, this);
	    return this.el;
	
	  }, 
	
	  appendHeader : function() {
	  	this.$el.append(this.template());
	  }, 
	  
	  appendNewPart : function(part) {
	    this.$el.append(new ListItemView({
	      model: part
	    }).render());
	  }
	});
	
	/**
	 * Inner view displaying a single item in the list
	 */
	var ListItemView = Backbone.View.extend({
	
	  tagName: "tr",
	
	  initialize: function() {
	    this.template = _.template( ListItemTemplate );
	    this.model.bind("change", this.render, this);
	  },
	
	  render: function(eventName) {
	    console.log("list item rendering");
	    this.$el.html(this.template(this.model.toJSON()));
	    return this.el;
	  }
	
	});
	
	return ListView;
});
