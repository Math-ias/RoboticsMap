function initMap() {
	// Initialize services.

	// Create map and place markers.
	var map = new google.maps.Map(document.getElementById('map'), {
        	zoom: 6,
        	center: event,
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

