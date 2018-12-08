//Array that lists out options for the game.
var computerchoice = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

//Creates variables to hold the number of wins losses and ties starting at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// Create variables placeholder references to the places in the HTML file.
var directionstext = document.getElementById("directionstext")
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var remainingguesses = document.getElementById("remainingguesses")
var guessedcharacters = document.getElementById("guessedcharacters")

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
}