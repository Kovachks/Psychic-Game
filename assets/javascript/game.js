/*	generate a computer guess and store - Done
	(begin loop) store user guess on key press
	compare user guess to computer guess
	log win/loss/guesses left
	if user guess = computer guess win
	if user guess != push to your guess array and remove guess
	if guesses left = 0 lose (end loop)
*/

//variables

//answer array
var answerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//wins variables
var wins = 0;

//losses variable
var losses = 0;

//guesses left variable
var guessesLeft = 9;

//your guessed letters array
var userGuesses = [];

//log computer guess for storage
var computerGuess = undefined;

//functions	

//Generating computers guess.  Not looping on keystroke
function computerGuessGen() {
	return Math.floor(Math.random() * answerArray.length);
}

//Storing randomly generated computer guess as variable;
computerGuess = answerArray[computerGuessGen()];
console.log(computerGuess);
//Initiating a function on keystroke
document.onkeyup = function(event) {

	//capture keystroke from above
	var userGuess = event.key;
	console.log(userGuess);

	//Compare user guess to computer guess to determine if they selected a letter
	if (answerArray.indexOf(userGuess) > -1) {

		//Compare user guess to computer guess to determine if they won
		if (userGuess === computerGuess) {
			wins = wins + 1;
			userGuesses = [];
			guessesLeft = 9;
			//Reseting computer guess.  This code should be altered.
			function computerGuessGen() {
				return Math.floor(Math.random() * answerArray.length);
			}
			computerGuess = answerArray[computerGuessGen()];
			console.log(computerGuess);
		//Compare user guess to computer guess to determine if they chose incorrectly
		} else if (userGuess !== computerGuess && guessesLeft > 1) {
			userGuesses.push(userGuess);
			guessesLeft = guessesLeft - 1;
		
		//Determining if the user ran out of guesses and lost
		} else {
			losses = losses + 1;
			guessesLeft = 9;
			userGuesses = [];
			//Reseting computer guess.  This code should be altered.
			function computerGuessGen() {
				return Math.floor(Math.random() * answerArray.length);
			}
			computerGuess = answerArray[computerGuessGen()];
			console.log(computerGuess);
		}

		//alerting the user they didn't select a valid character
	}	else {
		alert("select a letter")
	}
		//creating our html variable in order to display properly on the page
		var html =
		"<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + userGuesses.toString(", ");

		//setting the contents of the game div to be our HTML
		document.querySelector("#game").innerHTML = html;
}