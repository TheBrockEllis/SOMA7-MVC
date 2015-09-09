define(['hbs!js/news/news'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		$('.news-page .page-content').html(template(params.model));
		bindEvents(params.bindings);
	}

	function append(params) {
		$('.news-page .page-content').append(params.articles);
	}
	
	//This adds the $("element").on("click", function(){}) to the page,
	//but it uses the bindings object that is set up in the controller
	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}
	
	return {
		render: render,
		append: append
	};
});