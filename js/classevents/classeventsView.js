define(["app", 'hbs!js/classevents/classevents'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {        		
        $('.classevents-list').html(template(params.model));
        bindEvents(params.bindings);
	}
	
    function append(params) {
		$('.classevents-page ul').append(params.events);
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