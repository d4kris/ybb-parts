//template loader
require([],
		function () {

//	beforeEach(function() {
      this.templates = _.extend(this.templates || {}, {
        searchForm: '<div class="container-fluid"><div class="row-fluid">'+
        	'<div id="form" class="span4">'+
	  	'<label for="chassiID_1">Chassis ID</label>'+
	  	'<input type="text" name="chassisID_1" id="chassisID_1" class="span3" value="<%= chassisID_1 %>" />'+
	    '<input type="text" name="chassisID_2" id="chassisID_2" class="span3" value="<%= chassisID_2 %>" />'+	    
			'<label for="model">Model</label>'+
	  	'<input type="text" name="model" id="model" placeholder="Model" class="span6" value="<%= model %>"/>'+
	    '<label for="vin">VIN number</label>'+
	    '<input type="text" name="vin" id="vin" placeholder="VIN" class="span6" value="<%= vin %>" />'+
	    '<div>'+
		    '<button id="searchParts" class="btn">Search</button>'+
	  	 '</div>'+
	'</div>'+
	'<div class="span8">'+
	    '<h2>Search results</h2>'+
	    '<div id="searchParams"></div>'+
	    '<div id="list">'+
	        '<p>search results, click Search button</p>'+
	    '</div>'+
	'</div>'+
'</div></div>'
      });
    })();

