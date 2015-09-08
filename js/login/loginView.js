define(['hbs!js/login/login'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		$('.login-screen-content').html(template());
		bindEvents(params.bindings);
	}
	
	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	};
});