#/usr/bin/python3

import requests

JSON_OUTPUT = "teams.js"
EVENTNAME = "2017marea"

url = "https://www.thebluealliance.com/api/v2/event/{}/teams".format(EVENTNAME)
headers = {'X-TBA-App-Id':'4761:2017mareaMap:1'}

r = requests.get(url, headers=headers)

with open(JSON_OUTPUT, 'w') as myfile:
	myfile.write("teams = ")
	myfile.write(r.text) # Save the results.
	myfile.write(";")
