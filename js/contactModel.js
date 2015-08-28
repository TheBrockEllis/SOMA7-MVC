define(['app'],function(app) {

	//this is the main "Class" and accepts an object of information
	function Contact(values) {
		
		//if no data is given to the Model, it will assume an empty object
		values = values || {};
		
		//setting a random id value if none is given (for new contacts)
		this.id = values['id'] || Math.floor((Math.random() * 100000) + 5).toString();

		//set all of the properties of the object
		this.firstName = values['firstName'] || '';
		this.lastName = values['lastName'] || '';
		this.phone = values['phone'] || '';
	}

	//formInput is JSON that was extracted directly from
	//the form when the 'Save' button was pressed 
	Contact.prototype.setValues = function(formInput) {
		//go through each form element and add the value to the object property
		for(var field in formInput){
			//if that field isn't undefined...
			//or if the user actually filled out the form
			if (this[field] !== undefined) {
				this[field] = formInput[field];
			}
		}
	};

	//this method is going to be called right after the form is serialized
	//and the data placed into the object to make sure that everything
	//is up to snuff
	Contact.prototype.validate = function() {
		//assume everything is going to be ok before you start checking
		var result = true;
		
		//this specific object only requires there to be a first and last name
		if (!this.firstName && !this.lastName) {
			result = false;
		}
		
		return result;
	};

	return Contact;
});