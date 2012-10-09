/*globals require, jasmine*/

require(
  [
    'jasmine-html', 
    'spec/models/partsModelTest',
//    'spec/views/searchFormViewTest'
  ],
function() {
  'use strict';
  console.log('start Jasmine');
  
  jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
  jasmine.getEnv().execute();
});