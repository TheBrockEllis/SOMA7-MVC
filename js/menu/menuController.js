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
	  //TODO find out what menu items this student can access at this time
	  
	  menuItems = [
		{
	      "Title": "News",
	      "Link": "html/news.html"
		},
		{
		  "Title": "Events",
		  "Link": "html/events.html"
		},
		{
	      "Title": "Classes",
	      "Link": "html/classes.html"
		},
		{
	      "Title": "Posted Grades",
	      "Link": "html/postedgrades.html"
		},
		{
	      "Title": "Pass-A-Notes",
	      "Link": "html/pans.html"
		}
	  ];
	  
	  return menuItems;
	}

  function checkLoginStatus(){
    if( ! localStorage.getItem("accessToken") ){
      //console.log("checkLoginStatus");
      //console.log(app.f7);
      //app.f7.loginScreen("login-screen");
      app.mainView.router.load({ url: "login.html" }); 
	  return false;
    }else{
      return true; 
    }
  }

	function logoutUser(e) {
	  //remove all saved data
	  localStorage.clear();
	  
	  //close the side panel
	  app.f7.closePanel();
	  
	  //load up the login page
	  app.mainView.router.load({ url: "login.html" });
	}

	return {
		init: init
	};
});