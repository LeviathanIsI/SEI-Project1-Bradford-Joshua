//Initialize Buttons
let topButtons = document.querySelector(".topbuttons");
let bottomButtons = document.querySelector(".bottombuttons");
let greenButton = document.querySelector(".greenbutton");
let redButton = document.querySelector(".redbutton");
let yellowButton = document.querySelector(".yellowbutton");
let blueButton = document.querySelector(".bluebutton");
let startButton = document.querySelector(".startbutton");
let restartButton = document.querySelector(".restartbutton");
let timer = document.querySelector(".timer");

// Add event listeners to each button
// greenButton.addEventListener("click", userInput);
// redButton.addEventListener("click", userInput);
// yellowButton.addEventListener("click", userInput);
// blueButton.addEventListener("click", userInput);

let buttons = [greenButton, redButton, yellowButton, blueButton];
let randomButtonSequence = [];

//Provides a progressive sequence for the user to mimic
function randomSequenceGenerator() {
  for (i = 0; i < 100; i++) {
    let randomIndex = Math.floor(Math.random() * buttons.length);
    let randomButton = buttons[randomIndex];
    randomButtonSequence.push(randomButton);
  }
}

function playGame() {
  randomSequenceGenerator();
  console.log(randomButtonSequence);
}

function changeButtonColor() {}

// Listens for and compares the user input to the generated sequence
function userInput() {}

// Check to see if the provided sequence is valid
function invalidSequence() {
  if (userInput() !== randomButtonSequence) {
    return true;
  }
}

function restartGame() {
  restartButton.addEventListener("click", function () {
    location.reload();
  });
}

function endGame() {
  if (invalidSequence()) {
  }
}

playGame();
restartGame();
