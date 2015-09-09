define(["app", "sycamore", "js/news/newsView"], function(app, sycamore, NewsView) {

	var bindings = [{
		//class infinite-scroll
		element: '.infinite-scroll',
		
		//the event that we are listening to
		event: 'infinite',
		
		//the function that will be fired when the event happens
		handler: loadMoreNews
	}];

	function init() {
		//the loadClasses function will return the ajax jqXHR object as a promise
		//the .then method will fire once the promise is resolved and we have data
        app.f7.showPreloader("Loading some news");
		var newsRequest = loadNews("preview=1&nohtml=1");
		newsRequest.then(function(data){
            app.f7.hidePreloader()
            //console.log(data);
			NewsView.render({ bindings: bindings, model: data });
		});
	}

	function loadNews(params) {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("School/1002/News", params);
	}

	//are we currently loading some news?
	var loading = false;
	
	function loadMoreNews() {

		// Exit, if loading in progress
		if(loading) return;
		
		// Set loading flag
		loading = true;
		
		//how many elements do we have out there currently
		var offset = $('.news-page .page-content .card').length;
		
		var newsRequest = loadNews("nohtml=1&preview=1&limit=10&offset="+offset);
		newsRequest.then(function(data, textStatus, jqXHR){

			// if API returns results, loop through and append them
			// TODO handlebars partial 
			if (jqXHR.status == "200") {
				var articles = '';
				for(var i=0; i < data.length; i++){
					articles += "<div class='card'>";
					articles += "<div class='card-header'>";
					articles += "<a href='newsarticle.html?id="+data[i].ID+"'>"+data[i].Title+"</a>";
					articles += "</div>";
					articles += "<div class='card-content'>";
					articles += "<div class='card-content-inner'>"+data[i].Content+"</div>";
					articles += "</div>";
					articles += "<div class='card-footer'>Posted "+data[i].Day+"</div>";
					articles += "</div>"; 
				}
				
				// add to end of the list
				NewsView.append({articles: articles});
				
				// set flag to false so we can catch infinite events again
				loading = false;
				
			// if API returns back no data, do some cleanup work
			}else if (jqXHR.status == "204") {
			
				// Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
				app.f7.detachInfiniteScroll( $('.infinite-scroll') );
				
				// Remove preloader
				$('.infinite-scroll-preloader').remove();
				
				//stop the function
				return;
			}
			
		}); // end loadMoreNews()
	}

	return {
		init: init
	};
});