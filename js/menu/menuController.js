define(["app", "js/menu/menuView"], function(app, menuView) {

	var bindings = [
	  {
		  element: '.logout',
		  event: 'click',
		  handler: logoutUser
	  }
	];

	function init() {
	  if( checkLoginStatus() ){
		  //app.f7.alert("got here");
		  var menuItems = loadMenu();
		  menuView.render({ model: menuItems, bindings: bindings });
	  }
	 }

 	function loadMenu(){
	  //find out what menu items this student can access at this time
	  menuItems = [
		{
	      "Title": "News",
	      "Link": "news.html"
		},
		{
		  "Title": "Events",
		  "Link": "events.html"
		},
		{
	      "Title": "Classes",
	      "Link": "classes.html"
		},
		{
	      "Title": "Posted Grades",
	      "Link": "postedgrades.html"
		},
		{
	      "Title": "Pass-A-Notes",
	      "Link": "pans.html"
		}
	  ];
	  
	  return menuItems;
	}

  function checkLoginStatus(){
    if( ! localStorage.getItem("accessToken") ){
      console.log("checkLoginStatus");
      console.log(app.f7);
      //app.f7.loginScreen("login-screen");
      app.mainView.router.load({ url: "login.html" }); 
	  return false;
    }else{
      return true; 
    }
  }

	function logoutUser(e) {
	  localStorage.clear();
	  app.f7.closePanel(); 
	  app.mainView.router.load({ url: "login.html" });
	  //app.f7.alert("You trying to leave?!");
	}

	return {
		init: init
	};
});