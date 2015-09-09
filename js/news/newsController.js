define(["app", "sycamore", "js/news/newsView"], function(app, sycamore, NewsView) {

	function init() {
		//the loadClasses function will return the ajax jqXHR object as a promise
		//the .then method will fire once the promise is resolved and we have data
        app.f7.showPreloader("Loading some news");
		var newsRequest = loadNews();
		newsRequest.then(function(data){
            app.f7.hidePreloader()
            //console.log(data);
			NewsView.render({ model: data });
		});
	}

	function loadNews() {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("School/1002/News", "preview=1&nohtml=1");
	}

	return {
		init: init
	};
});