define(["app", "js/classes/classesView", "js/classes/classesModel"], function(app, ClassesView, Classes) {

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
		//this first return will return the jqXHR request/promise that will later be resolved by the data
		return request = $.get("https://app.sycamoreeducation.com/api/v1/Student/614085/Classes?access_token=0c5d5719a496eeb2ed78f5467def9df2", function(data){
      console.log(data);
      return data;
    });
	}

	return {
		init: init
	};
});