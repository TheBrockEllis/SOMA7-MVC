define(["app", 'hbs!js/event/event'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {        		
        $('.event-title').text(params.title);
		
		//needed to recalculate spacing on dynamic navbar titles
        app.f7.sizeNavbars('.view-main')
		
		if (params.model.AllDay == 1) {
			params.model.isAllDay = 1;
		}
		
        $('.event-page .page-content').html(template(params.model));
	}
        
	return {
		render: render
	};
});