define([
  '../app/scripts/models/searchFormModel'
], function ( $, _, Backbone, SearchFormModel ) {

	(function() {
  	console.log('SFM');

  	describe('SearchFormModel', function(){

      before(function(){
      });

      describe('#initialize', function(){
        it('should have default values', function() {
          var model = new SearchFormModel();
          expect(model).to.be.an('object');
        });
      });
    });
  })();
});
