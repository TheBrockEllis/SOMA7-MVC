define(["app", 'hbs!js/postedgrades/postedgrades'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {        		
        $('.postedgrades-page .page-content').html(template(params.model));
	}

	return {
		render: render
	};
});