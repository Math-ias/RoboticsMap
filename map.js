function initMap() {
	// Initialize symbols.
	var goldStar = { 
		path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
		fillColor: 'red',
		fillOpacity: 1,
		scale: 0.095,
		strokeColor: 'black',
		strokeWeight: 1,
};

	var hat_image = 'hat.png';

	/*
	var hatIcon = { 
		url: hat_image,
		size: new google.maps.Size(30,24),
		origin: new google.maps.Point(0, 0), 
		anchor: new google.maps.Point(10, 9), 
	};*/

	/*
	var hat_shape = {
		coords: [1, 1, 1, 18, 20, 18, 20, 1],
		type: 'poly',
	};*/

	// Create map and place markers.
	var map = new google.maps.Map(document.getElementById('map'), {
        // My controls.
		zoom: 10,
		mapTypeControl: false,
		streetViewControl: true,
		fullscreenControl: true,
		// Automatic.
        center: event,
    });

	map.fitBounds(new google.maps.LatLngBounds(boundsmin,boundsmax));

	// Event marker.	

	var event_marker = new google.maps.Marker({
		position: event,
		icon: goldStar,
		map: map,
		label: "R",
	});

	// Team markers.
	for (var i=0; i<teams.length; i=i+1) {
		team = teams[i];
		if (team["position"] != null) {
			var marker = new google.maps.Marker({
					position: team["position"],
        			map: map,
					label: team['nickname'][0],
					/*icon: hatIcon,
					shape: hat_shape,
					title: team['nickname'],
					zIndex: 1,*/
			});
		}
		
	}
}

