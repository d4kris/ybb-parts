yeomanbbb.Views.SubtabsView = Backbone.View.extend({

  el: '#subtabs',
  /* Which tab user is currently on */
  tab: 'parts', 

  template : new EJS({url: '/scripts/templates/subtabs-template.ejs.html'}),

  // events: {
  //   "click .search:" : "searchForm"
  // },

	initialize: function(){
  	console.log("subtabsView initialize");

    _.bindAll(this, "render");

    this.render();
  },

  render: function(){
    console.log("subtabsView rendering");
    this.$el.html(this.template.render(this));
    return this;
  }

});
