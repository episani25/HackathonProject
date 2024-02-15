var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/RollingStone_%20500%20Albums.csv"

var albumRank = getColumn(url,1);
var year = getColumn(url,2);
var album = getColumn(url,3);
var artist = getColumn(url,4);
var genre = getColumn(url,5);
var subGenre = getColumn(url,7);
var albumArt = getColumn(url,8);

var yearReleased = document.getElementById("year").value;
var preferredGenre = document.getElementById("genre").value;
var favoriteArtist = document.getElementById("artist").value;
var output = document.getElementById("outputBox").value;


//First, I am going to loop through the list and look for 





//Next, I am going to loop through the list and search for each genre