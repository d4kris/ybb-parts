yeomanbbb.Views.ListView = Backbone.View.extend({

  tagName : "ul",

  template : new EJS({ url: '/scripts/templates/searchResult-template' }),

	initialize : function() {
  	console.log("List view initialize");

    // _.bindAll(this, "render");
    this.model.bind("reset", this.render, this);
    this.model.bind("add", this.appendNewPart, this);

    this.render();
  },

  render : function() {
    console.log("List view rendering");
    // this.$el.html(this.template());
    // return this;
    _.each(this.model.models, function(part) {
        this.appendNewPart(part);
      }, this);
    return this.el;

  }, 

  appendNewPart : function(part) {
    this.$el.append(new yeomanbbb.Views.ListItemView({
      model: part
    }).render());
  }
});

yeomanbbb.Views.ListItemView = Backbone.View.extend({

  tagName: "li",
  template : new EJS({ url: '/scripts/templates/listItem-template' }),

  initialize: function() {
    this.model.bind("change", this.render, this);
  },

  render: function(eventName) {
    console.log("list item rendering");
    this.$el.html(this.template.render(this.model.toJSON()));
    return this.el;
  }

});
