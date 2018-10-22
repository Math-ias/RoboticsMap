RoboticsMap
===========

This was a small project to automatically create a map of all of the teams
attending the competition event at my high school. Part of the promotion of
the event was to emphasize how big the event was and how people were coming
from all over New England. With 40 Teams however this would be a challenge
manually.

## How It Works
The map is created in four distinct steps.
1. The data on teams coming to the event is downloaded off of
(TheBlueAlliance)[https://www.thebluealliance.com/] in the backend with python.
This was an expensive operation that both took a lot of bandwidth on my computer
and would take a lot of networking resources if done by the client every page
load. Because of this, this step is done only once.
2. Team addresses are turned into latitude and longitude coordinates to use
in Google Maps. This is done with Google's geocoding service with Maps.
3. These two pieces of data are stored together on every team in a generated
JavaScript file.
4. JavaScript code reads this team data and creates a dynamic Google Map.

## Gallery
Here are some screenshots that I was able to grab. I don't want to publish
my Google Maps application key online so I cannot host a live demo.


The program in the backend with take all of the latitude and longitude
coordinates to determine the total bounding box of all the markers.
![Zoomed Out](https://raw.githubusercontent.com/Math-ias/RoboticsMap/master/zoomedout.png)

The map is interactive and has custom graphics to show where the event is
taking place (the star).
![Zoomed In](https://raw.githubusercontent.com/Math-ias/RoboticsMap/master/zoomedin.png)

Each of the markers that shows where teams come from also display information
such as their motto, their website, and their dates of establishment.
![Team Selected](https://raw.githubusercontent.com/Math-ias/RoboticsMap/master/teamselected.png)
