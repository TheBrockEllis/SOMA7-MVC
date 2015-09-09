define(["app", 'hbs!js/newsarticle/newsarticle'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {
        $(".newsarticle-header").text(params.header);
        
        //needed to recalculate spacing on dynamic navbar titles
        app.f7.sizeNavbars('.view-main')
		
        $('.newsarticle-page .page-content').html(template(params.model));
	}

	return {
		render: render
	};
});