//handlebars starts with hbs! and leaves off the .hbs extension
define(['hbs!js/contact/contact'], function(viewTemplate) {
	var $ = Framework7.$;

	//params here is being passed an object with 3 properties:
	//model, state, and bindings
	function render(params) {
		$('.contact-page').html(viewTemplate({ model: params.model }));
		$('.contacts-header').text(params.state.isNew ? "New contact" : "Contact");
		bindEvents(params.bindings);
	}
	
	//This adds the $("element").on("click", function(){}) to the page,
	//but it uses the bindings object that is set up in the controller
	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	}
});