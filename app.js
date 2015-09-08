require.config({
	paths: {
		handlebars: "lib/handlebars",
		text: "lib/text",
		hbs: "lib/hbs"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	}
});

//this require.js module has a name as the first param
//2nd param is list of dependencies
//3rd param is the setup function
define('app', ['js/router'], function(Router) {
	Router.init();
	var f7 = new Framework7({
	  swipePanel: 'left',
		modalTitle: 'Sycamore Student',
		swipeBackPage: false,
		animateNavBackIcon: true
	});
	
	var mainView = f7.addView('.view-main', {
		dynamicNavbar: true
	});
	
	if(localStorage.getItem("accessToken")){
	  f7.loggedIn = true;
	  f7.accessToken = localStorage.getItem("accessToken");
	}
	
	return {
		f7: f7,
		mainView: mainView,
		router: Router
	};
	
});