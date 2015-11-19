define(["app", "js/login/loginView"], function(app, loginView) {

	var bindings = [
	  {
		  element: '.login',
		  event: 'click',
		  handler: loginUser
	  }
	];

	function init() {
		  loginView.render({ bindings: bindings });
	 }

	function loginUser(e) {
      //app.f7.alert("You trying to enter?!");
      //hit sycamore api to authenticate user
      //if successful, save access token and redirect user to menu
	
	  localStorage.setItem("accessToken", "real access token goes here");
	  app.f7.accessToken = localStorage.getItem("accessToken");
	  //console.log(app.mainView);
	  app.mainView.loadPage("index.html"); 
	}

	return {
		init: init
	};
});