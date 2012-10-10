(function() {
    describe('SearchFormView', function(){
      // var view;

      before(function(){
        // override loadTemplate
        yeomanbbb.Views.SearchFormView.prototype.loadTemplate = function() {
          this.template = new EJS({ text: '<div></div>' });
        }
        yeomanbbb.Views.SubtabsView.prototype.loadTemplate = function() {
          this.template = new EJS({ text: '<div></div>' });
        };
        yeomanbbb.Views.ListView.prototype.loadTemplate = function() {
          this.template = new EJS({ text: '<div></div>' });
        };
      });

      describe('#indexOf()', function(){
        it('should create a view object', function() {
          var view = new yeomanbbb.Views.SearchFormView();
          expect(view).to.be.an('object');
        });
        it('should return -1 when not present', function() {
          expect([1,2,3].indexOf(4)).to.equal(-1);
        });
      });
    });
  })();
