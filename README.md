# liri

### Overview

This Node.js command line application called Liri uses various node packages to make API requests. Users are able search for songs, movies and upcoming events using the command line. LIRI will use specific commands to look up information using APIs and then return the requested information to the user. Specifically, it requests information from the Bands in Town, Spotify and OMDB API's. By making the request for the specific information in the command line the user receives their answer. Information on a specific song or artist, information on a specific movie or concert dates and locations of a specific artist are all at the tip of your fingers with LIRI..

### Installing

To run Liri, you will first need to clone the repository to your local machine.

HTTPS:
$ git@github.com:LevarB100/liri.git
SSH:
$ git@github.com:LevarB100/liri.git

You will need to add an .env file at the root of the app containing your Spotify API keys. For help getting your own API keys visit:

https://developer.spotify.com/documentation/web-api/
Once you have your keys, add the following lines of code to your .env file:

SPOTIFY_ID=<your spotify id here>
SPOTIFY_SECRET=<your spotify secret here>
You will then be able to run the app with the command line commands below.

## How it works

There are four different ways this app can be used.

Return the next upcoming concert for the searched for artist or band:

$ node liri.js concert-this <search artist/band name here>
Return information about the searched for movie:

$ node liri.js movie-this <search movie name here> 
Return information about the searched for song:

$ node liri.js spotify-this-song <search song name here> 
This will read the included random.txt file and pass through a value to the spotify function, which will run and return song information about the song in the txt file:

$ node liri.js do-what-it-says 



---


