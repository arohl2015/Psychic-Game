// start of variables
var computerGuesses = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];

var userGuess = document.getElementById("guessed-letters");
var guessLeft = document.getElementById("guesses-left");
var win = document.getElementById("wins");
var loss = document.getElementById("losses");

