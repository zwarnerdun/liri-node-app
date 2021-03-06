# liri-node-app 
https://zwarnerdun.github.io/liri-node-app/.

# My Role:

   To organize commands to specifically output specific tasks using node packages by using solely javascript and my terminal.
   
# 1. The problem the app is trying to solve.

   LIRI is a Language Interpretation and Recognition Interface. This app is a command line node app that follows commands by retreiving parameters and out putting data. It does this because reqeusts are being made from different functionalities that need to be read and fectched in order for the commands to run properly.

# 2. How the app is organized.

   The app is organized by 4 commands:
   -concert-this
   -spotify-this
   -movie-this
   -do-wht-it-says
   Each command gives data back that has to do specifically to the command and logs it back into the txt.file. (i.e. command:concert-this returns data by the user inserting a band and the data comes back shows name of the event venue, date of the event, and venue location.)

# 3. How to use LIRI

   ## 1. Open your Terminal (i.e. Bash). 
   ## 2. Navigate to your liri.js file.
   ## 3. Pick any command to run and based on the command it will return different data.
    
    Example 1: Run the concert-this command

    node liri.js concert-this <name of artist or band>

    The system will display the name of the venue, the date of the event, and the location. 

   ![Capture node liri js concert-this](https://user-images.githubusercontent.com/49568886/60553840-03756a00-9d03-11e9-8ca2-1d9f12a52c5a.PNG)


   Example 2: Run the spotify-this-song command
   
   node liri.js spotify-this-song <song name here>
   
   The system will display the song's name, preview song url, album, and artist(s)

   
![Capture node liri js spotify-this-song](https://user-images.githubusercontent.com/49568886/60612477-b3e07e00-9d96-11e9-9e9e-e4081f1f1d8a.PNG)
   
   
   If no song is entered then a default song will be rendered. 
   
   ![Capture node liri js spotify-this-song default song](https://user-images.githubusercontent.com/49568886/60612489-b8a53200-9d96-11e9-9bdb-8f29e15e0dea.PNG)
   
   Example 3: Run the movie-this command
   
   node liri.js movie-this <movie name here>
   
   The system will display :
   
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
   ![Capture node liri js movie-this](https://user-images.githubusercontent.com/49568886/60611483-66fba800-9d94-11e9-985b-f8a8513e14d5.PNG)
   
   If no movie is entered then a default movie will be the output with link to watch it. 
   
![Capture liri js movie-this default](https://user-images.githubusercontent.com/49568886/60611491-69f69880-9d94-11e9-8781-12b30529a029.PNG)

   Example 4: Run the command do-what-it-says
   
   node liri.js do-what-it-says
   
   It runs the spotify-this-song for "I Want it That Way," as follows the text in random.txt.
   
   ![Capture liri js do-what-it-says](https://user-images.githubusercontent.com/49568886/60611498-6ebb4c80-9d94-11e9-9f59-650d7330203f.PNG)

   ## TECHNOLOGIES USED
   * Javascript
   * Nodejs
   * Node packages:
      Node-Spotify-API
      Request
      Moment
      DotEnv
   * JSON packages
   * APIs used:
      Bands in Town
      OMDB
   * Git
   * GitHub
   
   
   
 
