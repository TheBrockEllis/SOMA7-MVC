define(['hbs!js/news/news'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		$('.news-page .page-content').html(template(params.model));
	}

	return {
		render: render
	};
});