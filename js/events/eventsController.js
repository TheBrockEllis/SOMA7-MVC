define(["app", "sycamore", "js/events/eventsView"], function(app, sycamore, EventsView) {
  
    var bindings = [{
		//class infinite-scroll
		element: '.infinite-scroll',
		
		//the event that we are listening to
		event: 'infinite',
		
		//the function that will be fired when the event happens
		handler: loadMoreEvents
    }];

	function init() {
      console.log("initing events");
	  //the loadClasses function will return the ajax jqXHR object as a promise
	  //the .then method will fire once the promise is resolved and we have data
      app.f7.showPreloader("Loading some events");
            
	  var eventsRequest = loadEvents("limit=20");
      eventsRequest.then(function(data){
        app.f7.hidePreloader()
        console.log(data);
		EventsView.render({ bindings: bindings, model: data });
	  });
	}

	function loadEvents(params) {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("School/1002/Calendar", params);
	}

    //are we currently loading some news?
	var loading = false;
	
	function loadMoreEvents() {
      
		// Exit, if loading in progress
		if(loading) return;
		
		// Set loading flag
		loading = true;
		
		//how many elements do we have out there currently
		var offset = $('.events-list li').length;

		var eventsRequest = loadEvents("limit=10&offset="+offset);
		eventsRequest.then(function(data, textStatus, jqXHR){

			// if API returns results, loop through and append them
			// TODO handlebars partial 
			if (jqXHR.status == "200") {
				var events = '';                
				for(var i=0; i < data.length; i++){
					events += "<li><a href='html/event.html?id="+data[i].ID+"' class='item-link item-content'>";
					events += "<div class='item-inner'>";
					events += "<div class='item-title'>"+data[i].Title+"</div>";
					events += "<div class='item-after'>"+data[i].Day+"</div>";
					events += "</div>";
					events += "</a></li>"; 
				}
				
				// add to end of the list
				EventsView.append({events: events});
				
				// set flag to false so we can catch infinite events again
				loading = false;
				
			// if API returns back no data, do some cleanup work
			}else if (jqXHR.status == "204") {
			
				// Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
				app.f7.detachInfiniteScroll( $('.infinite-scroll') );
				               
				// Remove preloader
				$('.infinite-scroll-preloader').remove();
				
                // set flag to false so we can catch infinite events again
                loading = false;
                
				//stop the function
				return;
			}
			
		}); //end ajax request
	} // end loadMoreEvents()
    
	return {
		init: init
	};
});