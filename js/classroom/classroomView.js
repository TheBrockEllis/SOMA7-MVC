define(["app", 'hbs!js/classroom/classroom'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {
        $(".classroom-header").text(params.title);
        
        //needed to recalculate spacing on dynamic navbar titles
        app.f7.sizeNavbars('.view-main')
        
		$(".classroom-page .page-content").html(template(params));
	}

	return {
		render: render
	};
});