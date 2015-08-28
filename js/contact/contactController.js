//define starts a require.js module which takes 2 arguments: dependencies and definition function

//first dependency is app.js
//second dependency is the View file
//third  dependency is the Model file

//the 3 dependencies match up with the 3 modules that are being fed into the module
//app => app
//js/contact/contactView => ContactView
//js/contactModel => Contact
define(["app","js/contact/contactView", "js/contactModel"], function(app, ContactView, Contact) {

	//keeping track if we're dealing with a brand new contact as this point
	var state = {isNew: false};
	
	//will be an object with all of the information for this contact
	var contact = null;
	
	//bindings object essentially is the data for click event listeners, and will
	//be used in the View to listen to these events
	var bindings = [{
		//class contact-save-link
		element: '.contact-save-link',
		
		//the event that we are listening to
		event: 'click',
		
		//the function that will be fired when the event happens
		handler: saveContact
	}];

	function init(query){
		if (query && query.id) {
			//get contacts string from localStorage and parse as JSON
			var contacts = JSON.parse(localStorage.getItem("f7Base"));
			
			//loop through contacts until we find the one being looked at
			for (var i = 0; i< contacts.length; i++) {
				if (contacts[i].id === query.id) {
					contact = new Contact(contacts[i]);
					state.isNew = false;
					break;
				}
			}
		} else {
		//if there's no id in the querystring, we're creating a new contact 
			//create an empty model for this new Contact
			contact = new Contact();
			
			//this is a new contact, so we set this to true
			state.isNew = true;
		}
		
		//this actually kicks off the UI of the page
		//the model is feeding all of the  data to page
		//state is going to be used to toggle a button's text
		//bindings is going to be used to look up interaction with the page
		ContactView.render({
			model: contact,
			state: state,
			bindings: bindings
		});
	}

	//this is a function that will be called when an event (like a click) takes places
	function saveContact() {
		//getting all of the data from the form into json 
		var formInput = app.f7.formToJSON('#contactEdit');
		
		//method is part of the contactModel.js
		contact.setValues(formInput);
		
		//.validate is part of contactModel.js
		//validate makes sure the first and last names have a value
		if (!contact.validate()) {
			app.f7.alert("First name and last name are empty");
			return;
		}
		
		//grab contacts from localStorage and parse them as json
		var contacts = JSON.parse(localStorage.getItem("f7Base"));
		
		//if contact is new, push the object into the array
		if (state.isNew) {
			contacts.push(contact);
		} else {
		//else find the contact we're updating and overwrite old data
			for (var i = 0; i< contacts.length; i++) {
				if (contacts[i].id === contact.id) {
					contacts[i] = contact;
					break;
				}
			}
		}
		
		//saves whole contact json as a string in localstorage
		localStorage.setItem("f7Base", JSON.stringify(contacts));
		
		//load a new controller(?) and view(?) - essentially change the page
		app.router.load('list');
		
		//triggers the "back" transitions(?)
		app.mainView.goBack();
	}

	return {
		init: init
	};
});