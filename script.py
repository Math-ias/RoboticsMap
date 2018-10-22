#/usr/bin/python3

import requests
import googlemaps
import json

JSON_OUTPUT = "teams.js"
EVENTNAME = "2017marea"

gmaps = googlemaps.Client(key='REDACTED')

url = "https://www.thebluealliance.com/api/v2/event/{}/teams".format(EVENTNAME)
headers = {'X-TBA-App-Id':'4761:2017mareaMap:1'}

r = requests.get(url, headers=headers)

myjson = r.json()

event = gmaps.geocode('62 Oakland Rd, Reading, MA 01867')[0]["geometry"]["location"]

# Gather geocoding results for each team address. And determine bounds of all teams.

minlat = event["lat"]
minlng = event["lng"]
maxlat = minlat
maxlng = minlng

for team in myjson:
	geocode_result = gmaps.geocode(team["location"])[0]
	team["position"] = geocode_result["geometry"]["location"]
	lat = geocode_result["geometry"]["location"]["lat"]
	lng = geocode_result["geometry"]["location"]["lng"]
	if lat > maxlat:
		maxlat = lat
	elif lat < minlat:
		minlat = lat

	if lng > maxlng:
		maxlng = lng
	elif lat < minlng:
		minglng = lng

boundsmin = {"lat": minlat, "lng": minlng}
boundsmax = {"lat": maxlat, "lng": maxlng}

with open(JSON_OUTPUT, 'w') as myfile:
	myfile.write("teams = ")
	json.dump(myjson, myfile) # Save the results.
	myfile.write(";")
	myfile.write("event = ")
	json.dump(event, myfile)
	myfile.write(";")
	myfile.write("boundsmin = ")
	json.dump(boundsmin, myfile)
	myfile.write(";")
	myfile.write("boundsmax = ")
	json.dump(boundsmax, myfile)
	myfile.write(";")
