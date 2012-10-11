define([
  'models/searchFormModel'
], function ( SearchFormModel ) {

	console.log('SFM');

	describe('models/SearchFormModel', function(){
		var modell;
		
    describe('#initialize', function(){

    	beforeEach(function(){
        modell = new SearchFormModel();
      });

      it('should exist', function() {
        expect(modell).to.be.an('object');
      });

      it('should have defaults set', function () {
        expect(modell.get('chassisID_1')).to.equal('');
//        expect(modell.get('chassisID_2')).to.equal('');
//        expect(modell.get('vin')).to.equal('');
//        expect(modell.get('model')).to.equal('');
//        expect(modell.get('functionGroup')).to.equal('');
      });

    });

  });
});
