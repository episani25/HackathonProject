var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/RollingStone_%20500%20Albums.csv"

var albumRank = getColumn(url,1);
var year = getColumn(url,2);
var album = getColumn(url,3);
var artist = getColumn(url,4);
var genre = getColumn(url,5);
var subGenre = getColumn(url,7);
var albumArt = getColumn(url,8);
// console.log(artist)
var yearReleased = document.getElementById("year").value;
var preferredGenre = document.getElementById("genre").value;



//First, I am going to loop through the list and look for albums put out in the year the user imputs  
function produceAlbumFromYear(){
    var yearReleased = document.getElementById("year").value;
    var pickedYear = []
    
    for(var i = 0; i < year.length; i++){
        
        if(year[i].toLowerCase().includes(yearReleased.toLowerCase())){
            pickedYear.push(album[i]);
    
            }
        }
    document.getElementById("output").innerHTML = pickedYear;
    }




//Next, I am going to loop through the list and search for each genre and populate the albums in each genre
function produceAlbumFromGenre(){

    var preferredGenre = document.getElementById("genre").value;
    var pickedGenre = [];
    
    for(var i = 0; i < genre.length; i++){
        if(genre[i].toLowerCase().includes(preferredGenre.toLowerCase())){
            pickedGenre.push(album[i]);
    
            }
        }
    console.log(pickedGenre)
    document.getElementById("output").innerHTML = pickedGenre;
    }



//I am now going to loop through the list searching for albums created by the user imput
function produceAlbum(){
var favoriteArtist = document.getElementById("selectedArtist").value;
var favArtistAlbums = []

for(var i = 0; i < artist.length; i++){
    
    if(artist[i].toLowerCase().includes(favoriteArtist.toLowerCase())){
        console.log(artist[i]);
        favArtistAlbums.push(album[i]);

        }
    }
document.getElementById("output").innerHTML = favArtistAlbums;
}