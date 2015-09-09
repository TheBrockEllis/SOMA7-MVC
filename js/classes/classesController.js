define(["app", "sycamore", "js/classes/classesView", "js/classes/classesModel"],
  function(app, sycamore, ClassesView, Classes) {

	function init() {
		//the loadClasses function will return the ajax jqXHR object as a promise
		//the .then method will fire once the promise is resolved and we have data
		var classesRequest = loadClasses();
		classesRequest.then(function(data){
			//console.log(data);
			ClassesView.render({ model: data });
		});
	}

	function loadClasses() {
	  //this first return will return the jqXHR request/promise that will
      //later be resolved by the data
	  return request = sycamore.getData("Student/614085/Classes");
	}

	return {
		init: init
	};
});