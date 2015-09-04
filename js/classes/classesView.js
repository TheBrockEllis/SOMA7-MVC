define(['hbs!js/classes/classes'], function(template) {
	var $ = Framework7.$;

	function render(params) {
        $(".classes-header").html("Yo yo yo");
		//console.log(params);
		$('.classes-list ul').html(template(params.model));
	}

	return {
		render: render
	};
});