define([
        'views/searchFormView',
        'models/searchFormModel'
], function( SearchFormView, SearchFormModel ) {

	describe('SearchFormView', function() {
    var view, model;

    describe('#initialize', function(){

    	beforeEach(function(){
      	model = new SearchFormModel();
        view = new SearchFormView({ model : model });
      });

      it('should create a view object', function() {
        expect(view).to.be.an('object');
      });
      it('should use the template', function() {
//      	view.render();
//      	expect(view.$el.html()).to.contain('<button id="searchParts" class="btn">Search</button>');
      });
    });
  });
});
