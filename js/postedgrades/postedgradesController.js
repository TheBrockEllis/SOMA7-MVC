define(["app", "sycamore", "js/postedgrades/postedgradesView"], function(app, sycamore, PostedgradesView) {

	function init() {
      console.log("initing posted grades");
	  //the loadClasses function will return the ajax jqXHR object as a promise
	  //the .then method will fire once the promise is resolved and we have data
      app.f7.showPreloader("Loading your grades");
	  var gradesRequest = loadPostedGrades();
      gradesRequest.then(function(data){
        app.f7.hidePreloader()
        console.log(data);
		PostedgradesView.render({ model: data });
	  });
	}

	function loadPostedGrades(newsid) {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("Student/614085/Grades");
	}

	return {
		init: init
	};
});