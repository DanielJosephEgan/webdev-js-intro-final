"use strict";
const guessInputEl = document.getElementById("guess-input")
const subMitBtn = document.getElementById("submit-btn");
const reStartBtn = document.getElementById("restart-btn");


const guess = document.getElementById("guess-input");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let array = [];
const restartBtn = document.getElementById("restart-btn");



function numberGuessed(){
  let guess = document.getElementById("guess-input").value;

  if (guess == randomNumber){
    document.getElementById("guess-message").innerHTML = `${"You Won!"}`;
    document.getElementById("computer-guess").innerText = randomNumber;
    document.getElementById("restart-btn").disabled = false;
    document.getElementById("computer-guess").innerText = randomNumber;

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




function guessHistory(){
  if (array.length < 3){
array.push(guess.value);
document.getElementById("guess-history").innerHTML = array;


if (array.length == 3){
  document.getElementById("guess-message").innerHTML = `${"You lose!"}`;
document.getElementById("restart-btn").disabled = false;
  
}

}
}


restartBtn.addEventListener("click", function() {
  location.reload();
});



function render(){
  numberGuessed();
  displayGuess();
  guessHistory();
}

subMitBtn.addEventListener("click", function(){
  render();
});

restartBtn.addEventListener("click", function(){
  location.reload();
})
