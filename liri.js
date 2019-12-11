require("dotenv").config();
var keys = require("./keys.js");
//console.log(keys);
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var command = process.argv[2];
var query = process.argv[3];

switch (command) {
  case "concert-this":
    console.log("concerting");
    concertThis();
    break;

  case "spotify-this-song":
    console.log("spotifying");
    spotifyThisSong();
    break;

  case "movie-ths":
    console.log("moving");
    break;
}

function concertThis() {
  console.log("concfunction");

  axios
    .get(
      "https://api.seatgeek.com/2/events?q=nas&client_id=MTk1MTE5NzV8MTU3NDAyNzY4OS40Mw"
    )
    .then(function(response) {
      //console.log(response.data.events);
      for (let i = 0; i < response.data.events.length; i++) {
        console.log(response.data.events[i].venue.name);
        console.log(response.data.events[i].venue.address);
      }
    });
}

function spotifyThisSong() {
  console.log("spotify");
  spotify.search({ type: "track", query: query }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data.tracks.items[0].album.artists[0].name);
  });
}
