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

