define([
  'models/searchFormModel'
], function ( SearchFormModel ) {

	console.log('SFM');

	describe('models/SearchFormModel', function(){
		var model;
		
    beforeEach(function(){
      model = new SearchFormModel();
    });

    describe('#initialize', function(){
      it('should have default values', function() {
        expect(model).to.be.an('object');
      });

      it('should have defaults set', function () {
        expect(model.get('chassisID_1')).to.equal('');
        expect(model.get('chassisID_2')).to.equal('');
        expect(model.get('vin')).to.equal('');
        expect(model.get('model')).to.equal('');
        expect(model.get('functionGroup')).to.equal('');
      });

    });

  });
});
