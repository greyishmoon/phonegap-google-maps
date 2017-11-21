//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$(document).on('click', getPosition);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
    
    // Listener for button
    $('#getLocationButton').on("click", getPosition);
    
});




//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {

	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
    
    // Exercise 1 added...
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude;
    var altacc = position.coords.altitudeAccuracy;
    var heading = position.coords.heading;
    var speed = position.coords.speed;
    
    // DATE + TIME
    // position.timestamp returuns type domTimeStamp
	var domTimeStamp = time;
    // convert domTimeStamp to Date which browsers recognise
    var date = new Date(domTimeStamp);
    // convert to formated time string
    var time = date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + time);
    $('#longtext').val(longitude);
	$('#lattext').val(latitude);
    
    
    // Display extras
	$('#acctext').val(accuracy);
    $('#alttext').val(altitude);
    $('#altacctext').val(altacc);
    $('#headtext').val(heading);
    $('#speedtext').val(speed);
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
    alert('Error w/ watchPosition: ' +JSON.stringify(error));
	
}