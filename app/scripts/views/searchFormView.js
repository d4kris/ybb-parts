yeomanbbb.Views.SearchFormView = Backbone.View.extend({

  el: '#content',

  //template: _.template($("#searchForm-template").html()),
  template : new EJS({url: '/scripts/templates/searchForm-template.ejs'}),

  events: {
    "click #searchParts" : "searchParts",
    "click #addParts" : "addParts"
  },

	initialize: function() {
  	console.log("searchFormView initialize");

    _.bindAll(this, "render");
    this.render();
  },

  render: function() {
    console.log("searchFormView rendering");
    this.$el.html(this.template.render());
    return this;
  }, 

  searchParts: function () {
    console.log("Search parts");
    yeomanbbb.Collections.partsList = new yeomanbbb.Collections.PartsCollection();
    // TODO call search on server
    // yeomanbbb.Collections.partsList.fetch({
    //   success: function() {
    //     // show search result in list
    //     var listView = new yeomanbbb.Views.ListView({
    //       model: yeomanbbb.Collections.partsList
    //     });
    //     yeomanbbb.Routers.ApplicationRouter.showView("#list", listView);
    //   }
    // });
    yeomanbbb.Collections.partsList.add([
        { chassiID: 'A0238402', name: 'Tail pipe', model: 'FH12' },
        { chassiID: 'A0238402', name: 'Steering wheel', model: 'FH12' },
        { chassiID: 'A0238402', name: 'Rearview mirror', model: 'FH15' }
      ]);
    var listView = new yeomanbbb.Views.ListView({
        model: yeomanbbb.Collections.partsList
    });
    $("#list").html(listView.el);
  }, 

  addParts: function () {
    console.log("Search parts");
    
    yeomanbbb.Collections.partsList.add([
        { chassiID: 'B0238402', name: 'Tail pipe', model: 'DH12' },
        { chassiID: 'B0238402', name: 'Steering wheel', model: 'DH12' },
        { chassiID: 'B0238402', name: 'Rearview mirror', model: 'DH15' }
      ]);
  }


});
