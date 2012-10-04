yeomanbbb.Views.SearchFormView = Backbone.View.extend({

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
    this.template = new EJS({ url: '/scripts/templates/searchForm-template.ejs.html' });
  },

  render: function() {
    console.log("searchFormView rendering");
    this.$el.html(this.template.render(this.model.toJSON()));
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
    $("#searchParams").html("<i>Search using chassi id: "+this.model.get("chassisID_1")+
      "-"+this.model.get("chassisID_2")+", model: "+this.model.get("model")+", vin: "+this.model.get("vin")+"</i>");

    var partsList = new yeomanbbb.Collections.PartsCollection();

    // TODO call search on server
    partsList.fetch({
      success: function() {
        // show search result in list
        var listView = new yeomanbbb.Views.ListView({
          model: partsList
        });
        $("#list").html(listView.el);
      }
    });
  }

});
