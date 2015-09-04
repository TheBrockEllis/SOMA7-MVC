define(["app", "js/classroom/classroomView"], function(app, ClassroomView) {

	//query string is passed to the init function and can then be passed into
	//the data to get the model or passed directly into the template
	function init(query) {
		console.log("controller");
		ClassroomView.render({query: query});
	}

	return {
		init: init
	};
});