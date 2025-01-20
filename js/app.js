"use strict";
const guessInputEl = document.getElementById("guess-input")
const subMitBtn = document.getElementById("submit-btn");


const guess = document.getElementById("guess-input");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let array = [];

function numberGuessed(){
  let guess = document.getElementById("guess-input").value;

  if (guess == randomNumber){
    document.getElementById("guess-message").innerHTML = `${"You Won!"}`;
  }
  else if (guess > randomNumber){
    document.getElementById("guess-message").innerHTML = `${"Opps! Too High!"}`;
  }

  else if (guess < randomNumber){
    document.getElementById("guess-message").innerHTML = `${"Uh Oh! Too Low!"}`;
  }
}

function displayGuess(){
  let guess = document.getElementById("guess-input").value;
  document.getElementById("current-guess").innerText = guess;
}

function computerGuess(){
  document.getElementById("computer-guess").innerText = randomNumber;
}

function guessHistory(){
array.push(guess.value);
document.getElementById("guess-history").innerHTML = array;

}


// - [ ] The span with the id of `guess-history` should output your guess history.

// - [ ] The "Submit Guess" button should be enabled at the beginning of the game, but when the game is over it should be disabled.
// - [ ] The "Restart" button should be disabled at the beginning of the game, but when the game is over it should be enabled.
// - [ ] When the "Restart" button is clicked, all values and text output should reset.


function render(){
  numberGuessed();
  displayGuess();
  computerGuess();
  guessHistory();
}



subMitBtn.addEventListener("click", function(){
  render();
});