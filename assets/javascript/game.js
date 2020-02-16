// start of variables
var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var round = 1;

var userGuess = document.getElementById("guessed-letters");
var guessLeft = document.getElementById("guesses-left");
var win = document.getElementById("wins");
var loss = document.getElementById("losses");
var rounds = document.getElementById("round");

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
rounds.textContent = "Round: " + round;
console.log(computerChoice);

document.onkeyup = function (event) {
    userGuesses.push(event.key);
    var guess = event.key.toLowerCase();
    if (guess === computerChoice) {
        wins++;
        alert("You Won!");
        displayResults();
        reset()
    }
    else { 
        if (guessesLeft === 1) {
                losses++;
                guessesLeft--;
                alert("You Lost");
                displayResults();
                reset()
    }   
        else { guessesLeft--;
            displayResults()
            
        }
    }
}


function displayResults() {
    win.innerHTML = wins;
    loss.innerHTML = losses;
    userGuess.innerHTML = userGuesses;
    guessLeft.innerHTML = guessesLeft;
}

function reset ()   {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    guessesLeft = 10;
    userGuesses = [];
    round++;
    rounds.innerHTML = "Round: " + round;
    displayResults();
}