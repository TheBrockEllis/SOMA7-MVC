define(["app", "sycamore", "js/newsarticle/newsarticleView"], function(app, sycamore, NewsarticleView) {

	function init(query) {
      console.log("initing article");
		//the loadClasses function will return the ajax jqXHR object as a promise
		//the .then method will fire once the promise is resolved and we have data
        app.f7.showPreloader("Loading some news");
		var newsRequest = loadNews(query.id);
		newsRequest.then(function(data){
            app.f7.hidePreloader()
            console.log(data);
			NewsarticleView.render({ model: data, header: data.Title });
		});
	}

	function loadNews(newsid) {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("School/1002/News/"+newsid);
	}

	return {
		init: init
	};
});