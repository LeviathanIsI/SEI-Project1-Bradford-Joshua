//Initialize Buttons
let topButtons = document.querySelector(".topbuttons");
let bottomButtons = document.querySelector(".bottombuttons");
let greenButton = document.querySelector(".greenbutton");
let redButton = document.querySelector(".redbutton");
let yellowButton = document.querySelector(".yellowbutton");
let blueButton = document.querySelector(".bluebutton");

// Add event listeners to each button
// greenButton.addEventListener("click", userInput);
// redButton.addEventListener("click", userInput);
// yellowButton.addEventListener("click", userInput);
// blueButton.addEventListener("click", userInput);

let buttons = [greenButton, redButton, yellowButton, blueButton];
let randomButtonSequence = [];

//Provides a progressive sequence for the user to mimic
function randomSequence() {
  let randomIndex = Math.floor(Math.random() * buttons.length);
  let randomButton = buttons[randomIndex];
  randomButtonSequence.push(randomButton);
}

// Listens for and compares the user input to the generated sequence
function userInput() {}

// Check to see if the provide sequence is valid
function invalidSequence() {}

// Timer function between button clicks
function timer() {}

randomSequence();
console.log(randomButtonSequence);
