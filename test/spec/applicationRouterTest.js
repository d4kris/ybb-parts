(function() {
    describe('ApplicationRouter', function(){
      yeomanbbb.Models.SearchFormModel = function() {};
      yeomanbbb.Views.SearchFormView = function() {};

      before(function(){
      });

      describe('#initialize', function(){
        it('should create a ApplicationRouter object', function() {
          var router = new yeomanbbb.Routers.ApplicationRouter();
          expect(router).to.be.an('object');
        });
      });
    });
  })();
