// !-- psuedocode

// create variables for wins and losses that start at 0
// assign id to these variables 
// create variable for numbres of guesses left which starts at 9, and array guesses picked so far which will initially be empty 
// assign id to these variables 
// generate a random letter
// listen for a keypress event for letter that user picks
// if that keypress event is equal to the random letter, then add one to the wins variable, subtract one from guesses left, update dom with wins and guesses left variables, restart game (regenerate random letter), 
// if keypress event does not equal random letter, subtract one from guesses left, update dom with guesses left variable, and update dom with guesses picked array, add to this array the most recently picked guess
// when guesses left is equal to 0, start game over (regenerate random letter)
//  -->

//game variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

//dom variables
var winsHTML = document.getElementById('wins');
var lossesHTML = document.getElementById('losses');
var guessesLeftHTML = document.getElementById('guessesLeft');
var guessesHTML = document.getElementById('guesses');

//string of possible letters to guess
var letters = 'abcdefghijklmnopqrstuvwxyz';
//when a key is pressed
document.onkeyup = function(event){
	//generate a random letter
	var randomLetter = letters.charAt(Math.floor(Math.random()*letters.length));
	//if keypress event is equal to the random letter
	if(event.key === randomLetter) {
		 // then add one to the wins variable
		 wins++;
		 // update dom with wins 
		 winsHTML.innerText = 'Wins: ' + wins
		 // reset game
		 guessesLeft=9
		 guessesLeftHTML.innerText= 'Guesses left: ' + guessesLeft;	
	} else{
		// subtract one from guesses left	
		guessesLeft--;
		// update dom  with guesses left 
		guessesLeftHTML.innerText= 'Guesses left: ' + guessesLeft;	
		//add to guesses picked array most recently picked letter
		guesses.push(event.key);
		// update dom with guesses picked array
		guessesHTML.innerText= 'Your guesses so far: ' + guesses;
	} if(guessesLeft===0){
		// add one to losses variable
		losses++;
		//update dom with losses 
		lossesHTML.innerText= 'Losses: ' + losses;
		//reset game
		guessesLeft=9
		guessesLeftHTML.innerText= 'Guesses left: ' + guessesLeft;	
	}
}