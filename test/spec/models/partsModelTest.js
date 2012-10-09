define([
'jasmine', 'jasmine-jquery', 'models/partsModel'
], function ( jasmine, jasmineJQuery, PartsModel) {

  'use strict';

	describe('models/partsModel', function () {

    var model;

    describe('new PartsModel()', function () {

      beforeEach(function () {
        model = new PartsModel();
      });

      it('should exist', function () {
        expect(model).toBeDefined();
      });

      it('should have init', function () {
        expect(model.initialize).toBeDefined();
      });

      it('should have defaults set', function () {
        expect(model.get('chassiID')).toEqual('');
        expect(model.get('name')).toEqual('');
        expect(model.get('model')).toEqual('');
      });

    });
  });
});
