function initMap() {
	// Initialize services.

	var geocoder = new google.maps.Geocoder();
         
	var center_address = "62 Oakland Rd, Reading, MA"; // The address of our event.
	var center;

	// teams is an outside-defined variable full of JSON from TBH.

	var markers = {};

	// Geocoding into lat/long and marker creation.
	for (var i=0; i<teams.length; i=i+1) {
		team = teams[i];
		addr = {address: team.location,}
		geocoder.geocode(addr, function(results, mystatus) {
			// Status responses.
			switch (mystatus) {
				case "ZERO_RESULTS":
					console.error(team.name + " had an address that the geocoder" +
					" could not use! ZERO_RESULTS STATUS");
					console.error(addr);
				case "OVER_QUERY_LIMIT":
				case "REQUEST_DENIED":
				case "INVALID_REQUEST":
				case "UNKNOWN_ERROR":
				case "ERROR":
					console.error("Geocoder status: "+mystatus);
					console.error("Unable to find address for team "+team.team_number);
					console.error("Using address object "+addr);
					break;
				case "OK":
					team["position"] = results[0].geometry.location;
					break;
			}
		});
	}

	center_addr = {address: center_address,};
	geocoder.geocode(center_addr, function(results, mystatus){
		if (mystatus == "OK") {
			center = results[0].geometry.location;
		} else {
			console.error("Center address not found!");
		}
	});

	

	// Create map and place markers.
	var map = new google.maps.Map(document.getElementById('map'), {
        	zoom: 6,
        	center: center,
        });

	for (var i=0; i<teams.length; i=i+1) {
		team = teams[i];
		if (team["position"] != null) {
			var marker = new google.maps.Marker({
        			position: team["position"],
        			map: map,
			});
		}
		
	}
}

