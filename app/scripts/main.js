
window.yeomanbbb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
 		new yeomanbbb.Routers.ApplicationRouter();
 		Backbone.history.start();


  }
};

$(document).ready(function(){
  yeomanbbb.init();
});
