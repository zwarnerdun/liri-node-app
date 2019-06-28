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

//Function for Bands in Town//
function showConcertInfo(inputParameter);{
    var queryURL = "https:rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryURL, function(error, response, body){
        //successful//
        if (! error && response.statusCode ===200) {
            var concerts = JSONparse(body);
            for (var i = 0; i < concerts.lenghth; i++){
                console.log ("*****************EVENT INFO*******************");
                //appending in log.txt file//
                fs.appendFileSync("log.txt", "*****************EVENT INFO*******************\n");
                console.log(i);
                fs.appendFileSync("log.txt", i+"\n")
                console.log("Name of the venue" + concerts[i].venue.name);
                fs.appendFileSync("log.txt","Name of the venue: ", concerts.venue.name +"\n");
                console.log("Venue location: " + concerts[i].venue.city);
                fs.appendFileSync("log.txt","Venue location: ", concerts.venue.city +"\n");
                console.log("Date of event: ", concerts[i].datetime);
                fs.appendFileSync("log.txt","Date of event: " + concerts.datetime+"\n")
                console.log("***********************");
                fs.appendFileSync("log.txt","***********************" +"\n")
            }

        }else{
            console.log("There has been an error!")
        }
    }
)};

