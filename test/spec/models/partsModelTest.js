define([
  'models/partsModel'
], function ( PartsModel ) {

  'use strict';

	describe('models/partsModel', function () {

    var model;

    describe('new PartsModel()', function () {

      beforeEach(function () {
        model = new PartsModel();
      });

      it('should exist', function () {
        expect(model).to.be.defined;
      });

      it('should have defaults set!', function () {
        expect(model.get('chassiID')).to.equal('');
        expect(model.get('name')).to.equal('');
        expect(model.get('model')).to.equal('');
      });

    });
  });
});
