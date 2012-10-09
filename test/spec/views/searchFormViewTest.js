define([
'jasmine', 'jasmine-jquery', 'views/searchFormView'
], function ( jasmine, jasmineJQuery, View) {

  'use strict';

	describe('views SearchFormView', function () {

    var view;

    describe('new View()', function () {

      beforeEach(function () {
      	
        view = new SearchFormView({
        	template: this.templates.searchForm
        });
      });

      it('should exist', function () {
        expect(view).toBeDefined();
      });

      it('should have init', function () {
        expect(view.initialize).toBeDefined();
      });

      it('should have events', function () {
        expect(view.get('events')).toContain('change');
      });

    });
  });
});
