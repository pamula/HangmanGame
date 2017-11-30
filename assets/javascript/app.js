// alert("hello");to check the js file is linked to HTML file
// global variables
// functions
// wordoptions
  


  var words = ["rose", "lilly", "lotus", "jasmine", "orchids"]; 
// blankAndSuccess
var underScores = [];
var selectedWord = "";
var numBlanks = 0;
// guessLeft
var guessRemain = 9;
var winCount = 0;
var lossCount = 0;
// lettersinWord
var lettersinWord =[];
var wrongLetters = [];
 // functions----------------

 function startGame () {
 	selectedWord = words[Math.floor(Math.random() * words.length)];
 	lettersinWord = selectedWord.split("");
 	numBlanks = lettersinWord.length;


 	guessRemain = 9;
 	wrongLetters = [];
 	underScores = [];

 	// populate banks and success with right number of blanks
 	for(var i=0;i<numBlanks;i++){
 		underScores.push("-");

 	}

 	// change the HTML to reflect on the conditions
 	document.getElementById("wordToGuess").innerHTML = underScores.join(" ");
 	document.getElementById("numGuesses").innerHTML = guessRemain;
 	document.getElementById("winCounter").innerHTML = winCount;
 	document.getElementById("lossCounter").innerHTML = lossCount;




 	console.log(selectedWord);
 	console.log(lettersinWord);
 	console.log(numBlanks);
 	console.log(underScores);
 }
 

// check if the letter exists in the word

function checkLetters(letter){

	var isLetterInWord = false;
	for(var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter){
			isLetterInWord = true;
		}

	}
	if(isLetterInWord){

		for(var i=0;  i<numBlanks; i++){
			if(selectedWord[i] == letter){
				underScores[i] = letter;
			}
		}
	}
	else{
		wrongLetters.push(letter);
		guessRemain-- ;
	}
	console.log(underScores);
}

function roundComplete(){
	console.log("winCount:" + winCount + " Loss Count:" + lossCount + " Guesses Left" + guessRemain);
 

 // update the HTML to reflect the most recent count stats
 document.getElementById("numGuesses").innerHTML = guessRemain;
 document.getElementById("wordToGuess").innerHTML = underScores.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");




 // check if user won
 if(lettersinWord.toString() == underScores.toString()){
 	winCount++;
 	alert("You Win");

 	// update the win count in the HTML
 	document.getElementById("winCounter").innerHTML = winCount;
 	// document.getElementById("winCounter").style.color = "green" ;

 	startGame();
 }
 else if(guessRemain == 0){
 	lossCount++;
 	alert("You Lost");
 	// update the HTML
 	document.getElementById("lossCounter").innerHTML = lossCount;
 	 	// document.getElementById("lossCounter").style.color = "red";

 	startGame();

 }

 // function changeColor(){
 // 	if(winCount>=1){
 // 		document.getElementById("winCounter").style.color = "green";
 // 	}
 // 	else if(lossCount>=1){
 // 		document.getElementById("lossCounter").style.color = "red";
 // 	}
 	
 // }


}





startGame();

// register keyclicks///

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);

	// console.log(letterGuessed);

	// alert(letterGuessed);
	roundComplete();
console.log(letterGuessed);

}
