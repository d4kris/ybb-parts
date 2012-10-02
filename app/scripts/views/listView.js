yeomanbbb.Views.ListView = Backbone.View.extend({

  tagName : "ul",

  template : _.template($("#searchResult-template").html()),

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

  initialize: function() {
    this.template = _.template($("#listItem-template").html());
    this.model.bind("change", this.render, this);
  },

  render: function(eventName) {
    console.log("list item rendering");
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }

});
