define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/searchFormTemplate.html',
  'collections/partsCollection',
  'views/listView'
  ], function ( $, _, Backbone, SearchFormTemplate, PartsCollection, ListView ) {

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
        this.template = _.template( SearchFormTemplate );
      },

      render: function() {
        console.log("searchFormView rendering");
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }, 

      onChange: function (event) {
        // Apply the change to the model
        var target = event.target, 
          change = {}; 
        change[target.name] = target.value;
        this.model.set(change);
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
      }

    });
    
    return SearchFormView;
});
