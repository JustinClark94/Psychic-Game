//Array that lists out options for the game.
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Creates variables to hold the number of wins losses and ties starting at 0.
var wins = 0;
var losses = 0;
var ties = 0;
var numGuess = 9;
var guessedChar = [];

// Create variables placeholder references to the places in the HTML file.
var directionsText = document.getElementById("directions-text")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var remainingGuessesText = document.getElementById("remainingguesses")
var guessedCharactersText = document.getElementById("guessedcharacters")

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
var userGuess = event.key;
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


if((userGuess === computerGuess)){
    wins++
    guessedChara = [];
}



if(userGuess !== computerGuess){
    numGuess--
    guessedChar.push(userGuess);

}

if(numGuess === 0){
    numGuess = 9;
    losses ++
    //CHECK THIS.
   guessedChar.clear();

}

directionsText.textContent = "hello";
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
remainingGuessesText.textContent = "Remaining Guesses: " + numGuess;
guessedCharactersText.textContent = "Characters Guessed: " + guessedChar;


}