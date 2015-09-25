define(["app", "sycamore", "js/event/eventView"], function(app, sycamore, EventView) {
  
	function init(query) {
      console.log("initing event");
	  //the loadClasses function will return the ajax jqXHR object as a promise
	  //the .then method will fire once the promise is resolved and we have data
      app.f7.showPreloader("Loading event details");
            
	  var eventRequest = loadEvent(query.id);
      eventRequest.then(function(data){
        app.f7.hidePreloader()
        console.log(data);
		EventView.render({ title: data.Title, model: data });
	  });
	}

	function loadEvent(eventid) {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("School/1002/Calendar/"+eventid);
	}
    
	return {
		init: init
	};
});