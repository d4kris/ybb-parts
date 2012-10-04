yeomanbbb.Views.SubtabsView = Backbone.View.extend({

  el: '#subtabs',
  /* Which tab user is currently on */
  tab: 'parts', 

  // events: {
  //   "click .search:" : "searchForm"
  // },

	initialize: function(){
  	console.log("subtabsView initialize");
    this.loadTemplate();
    _.bindAll(this, "render");
    this.render();
  },

  loadTemplate: function() {
    console.log("loadTemplate");
    this.template = new EJS({ url: '/scripts/templates/subtabs-template.ejs.html' });
  },

  render: function(){
    console.log("subtabsView rendering");
    this.$el.html(this.template.render(this));
    return this;
  }

});
