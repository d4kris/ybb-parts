define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/searchFormTemplate.html',
  'collections/partsCollection',
  'views/listView',
  'typeahead',
  'utils/localStore'
  ], function ( $, _, Backbone, SearchFormTemplate, PartsCollection, ListView, typeAhead, localStore ) {

    var SearchFormView = Backbone.View.extend({

      el: '#content',
      
      events: {
        "change"             : "onChange",
        "click #searchParts" : "searchParts"
      },

    	initialize: function() {
      	console.log("searchFormView initialize");
        this.loadTemplate();
        _.bindAll(this, "render");
        this.render();
      },

      loadTemplate: function() {
        console.log("loadTemplate");
        this.template = _.template( this.options.template || SearchFormTemplate );
      },

      render: function() {
        console.log("searchFormView rendering");
        this.$el.html(this.template(this.model.toJSON()));
        // load autocomplete contents 
  	    this.loadModelTypeahead();
  	    this.loadFunctionGroupTypeahead();
  	    return this;
      }, 

      onChange: function (event) {
        // Apply the change to the model
        var target = event.target, 
          change = {}; 
        change[target.name] = target.value;
        this.model.set(change);
        if (target.name == 'functionGroup') {
        	$('#functionGroupLabel').html(target.value);
        }
      },

      searchParts: function () {
        console.log("Search parts: "+JSON.stringify(this.model));
        // debug to show form params
        $("#searchParams").html("<i>Search using chassi id: "+this.model.get("chassisID_1")+
          "-"+this.model.get("chassisID_2")+", model: "+this.model.get("model")+", vin: "+this.model.get("vin")+"</i>");

        var partsList = new PartsCollection();
        partsList.fetch({
          success: function() {
            // show search result in list
            var listView = new ListView({
              model: partsList
            });
            $("#list").html(listView.el);
          }
        });
      }, 
  	  
  	  // load model autocomplete list
  	  loadModelTypeahead: function() {
  	  	$('#model').typeahead({
  	  			source: function(query, process) {
//  	  				return $.get(url, {query:query}, function (data) {
//  	  				  return process(data.modelId);
//  	  			  }
  	  				return _.pluck(localStore.truckModel, 'modelId');
  	  			} 
  	  	});
  	  },
  	  
  	  // load model autocomplete list
  	  loadFunctionGroupTypeahead: function() {
  	  	$('#functionGroup').typeahead({
  	  			source: function(query, process) {
//  	  				return $.get(url, {query:query}, function (data) {
//  	  				  return process(data.id);
//  	  			  }
  	  				return _.pluck(localStore.functionGroups, 'id');
  	  			}, 
  	  			matcher: function(item) {
  	  				// override to only accept items starting with the input (query)
  	  				return (item.indexOf(this.query)==0);
  	  			}
  	  	});
  	  }

    });
    
    return SearchFormView;
});
