# liri-node-app
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


   Example 2: Run the spotify-this command
   
   node liri.js spotify-this <song name here>
   
   The system will display the song's name, preview song url, album, and artist(s).
   
![Capture node liri js spotify-this-song](https://user-images.githubusercontent.com/49568886/60612477-b3e07e00-9d96-11e9-9e9e-e4081f1f1d8a.PNG)
   
   
   If no song is entered then a default movie will be rendered and a link on where to watch it. 
   
   
   
