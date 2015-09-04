define(['hbs!js/classroom/classroom'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		console.log("view");
		console.log(params);
        $(".classroom-header").html("Class Name");
		$(".classroom-page .page-content").html(template(params));
	}

	return {
		render: render
	};
});