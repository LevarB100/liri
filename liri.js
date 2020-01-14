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
    spotifyThisSong(query);
    break;

  case "movie-this":
    console.log("moving");
    moviethis(query);
    break;
  case "do-what-it-says":
    console.log("doing it");
    doWhatItSays();
    break;
}

function concertThis() {
  console.log("concfunction");

  axios
    .get(
      "https://api.seatgeek.com/2/events?q=" +
        query +
        "&client_id=MTk1MTE5NzV8MTU3NDAyNzY4OS40Mw"
    )
    .then(function(response) {
      for (let i = 0; i < response.data.events.length; i++) {
        console.log(response.data.events[i].venue.name);
        console.log(response.data.events[i].venue.address);
      }
    });
}

function spotifyThisSong() {
  console.log("spotify");
  // spotify.search({ type: "track", query: query }, function(err, data) {
  //   if (err) {
  //     return console.log("Error occurred: " + err);
  //   }

  //   console.log(data.tracks.items[0].album.artists[0].name);
  // });

  spotify.sear({ type: "track", query: query }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
      if (i === 0) {
        console.log("Artist(s): " + data.tracks.items[0].artists[i].name);
      } else {
        console.log("         " + data.tracks.items[0].artists[i].name);
      }
    }
    console.log("Song:         " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
    console.log("Album:        " + data.tracks.items[0].album.name);
  });
}

function moviethis(query) {
  if (query === query) {
    var queryUrl =
      "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);
    axios.get(queryUrl).then(function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("Ratings: " + response.data.Ratings[0].query);
      console.log("Country: " + response.data.Country);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    });
  } else
    var queryUrl =
      "http://www.omdbapi.com/?t=" + MrNobody + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);
  axios.get(queryUrl).then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("Ratings: " + response.data.Ratings[0].query);
    console.log("Country: " + response.data.Country);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    // [spot..., "i wantiit ..."]
    var dataArr = data.split(",");
    if (dataArr[0] === "spotify-this-song") {
      spotifySong(dataArr[1]);
    }
    if (dataArr[0] === "concert-this") {
      concertThis(dataArr[1]);
    }
    if (dataArr[0] === "movie-this") {
      movieThis(dataArr[1]);
    }
  });
}
