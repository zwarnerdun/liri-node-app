//get and set environment variables//
require("dotenv").config();

//stored variables to be called on//
var fs = require("fs")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");

//user variables for input//
var userInput = process.argv[2];
var inputParameter = process.argv[3];

//implement function//
userOptions(userInput,inputParameter);

//multiple functions that need to be handled//
function userOptions(userInput,inputParameter){
    switch(userInput){
    case 'concert-this':
        showConcertInfo(inputParameter);
        break;
    case 'spotify-this-song':
        showSongInfo(inputParameter);
        break;
    case 'movie-this':
        showMovieInfo(inputParameter);
        break;
    case 'do-what-it-says':
        showAnythingInfo(inputParameter);
        break;
    default:
        console.log("Invalid option, please try typing the correct information that you need again.")
    }
}

// //Function for Bands in Town//
function showConcertInfo(inputParameter){
    var queryURL = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";
    request(queryURL, function(error, response, body){
        //successful//
        if (!error && response.statusCode ===200) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++){
                console.log ("*****************EVENT INFO*******************");
                //appending in log.txt file//
                // fs.appendFileSync("log.txt", "*****************EVENT INFO*******************\n");
                // console.log(i);
                // fs.appendFileSync("log.txt", i+"\n")
                console.log("Name of the venue: " + concerts[i].venue.name);
                // fs.appendFileSync("log.txt","Name of the venue: ", concerts.venue.name +"\n");
                console.log("Venue location: " + concerts[i].venue.city);
                // fs.appendFileSync("log.txt","Venue location: ", concerts.venue.city +"\n");
                console.log("Date of event: ", concerts[i].datetime);
                // fs.appendFileSync("log.txt","Date of event: " + concerts.datetime+"\n")
                console.log("***********************");
                // fs.appendFileSync("log.txt","***********************" +"\n")
            }

        }else{
            console.log("There has been an error!")
        }
    }
)};

// //Funtion for Music Info: Spotify//
function showSongInfo(inputParameter) {
    if (inputParameter === undefined) {
        inputParameter = "The Sign"; //default Song
    }
    spotify.search(
        {
            type: "track",
            query: inputParameter
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("**********SONG INFO*********");
                fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
                // console.log(i);
                fs.appendFileSync("log.txt", i +"\n");
                console.log("Song name: " + songs[i].name);
                fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
                console.log("Preview song: " + songs[i].preview_url);
                fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
                console.log("Album: " + songs[i].album.name);
                fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                console.log("Artist(s): " + songs[i].artists[0].name);
                fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                console.log("*****************************");  
                fs.appendFileSync("log.txt", "*****************************\n");
             }
        }
    );
};


//Funtion for Movie Info: OMDB//
function showMovieInfo(inputParameter){
    if (inputParameter === undefined) {
        inputParameter = "Mr. Nobody"
        console.log("-----------------------");
        fs.appendFileSync("log.txt", "-----------------------\n");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +"\n");
        console.log("It's on Netflix!");
        fs.appendFileSync("log.txt", "It's on Netflix!\n");
}   }

var queryUrl =  "https://www.omdbapi.com/?t=" + inputParameter + "&y=&plot=short&tomatoes=true&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    // If successful//
    if (!error && response.statusCode === 200) {
        var movies = JSON.parse(body);
        console.log("**********MOVIE INFO*********");  
        fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
        console.log("Title: " + movies.Title);
        fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
        console.log("Release Year: " + movies.Year);
        fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
        console.log("IMDB Rating: " + movies.imdbRating);
        fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
        console.log("Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies));
        fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n");
        console.log("Country of Production: " + movies.Country);
        fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
        console.log("Language: " + movies.Language);
        fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
        console.log("Plot: " + movies.Plot);
        fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
        console.log("Actors: " + movies.Actors);
        fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
        console.log("*****************************");  
        fs.appendFileSync("log.txt", "*****************************\n");
    } else{
      console.log('Error occurred.');
    }

// });

// //function for Rotten Tomatoes Rating
function getRottenTomatoesRatingObject (data) {
    return data.Ratings.find(function (item) {
       return item.Source === "Rotten Tomatoes";
    });
  }
  
  function getRottenTomatoesRatingValue (data) {
    return getRottenTomatoesRatingObject(data).Value;
  }

// function for reading out of random.txt file  
function showAnythingInfo(){
	fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
		}
        var dataArr = data.split(',');
        userOptions(dataArr[0], dataArr[1]);
	});
}})