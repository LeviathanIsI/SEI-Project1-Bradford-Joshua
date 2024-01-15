// Initialize Buttons
let greenButton = document.querySelector(".greenbutton");
let redButton = document.querySelector(".redbutton");
let yellowButton = document.querySelector(".yellowbutton");
let blueButton = document.querySelector(".bluebutton");
let startButton = document.querySelector(".startbutton");
let restartButton = document.querySelector(".restartbutton");

//Get access to button audio files
const greenButtonSound = document.querySelector("#greenbuttonsound");
const rednButtonSound = document.querySelector("#redbuttonsound");
const yellowButtonSound = document.querySelector("#yellowbuttonsound");
const blueButtonSound = document.querySelector("#bluebuttonsound");
const invalidSound = document.querySelector("#invalidsound");

let buttons = [greenButton, redButton, yellowButton, blueButton];
let sequence = [];
let playerSequence = [];
let level = 0;
let sequenceIndex = 0;
const brighterColors = new Map([
  [greenButton, "#99ff66"],
  [redButton, "#FF6B6B"],
  [yellowButton, "#FFFF99"],
  [blueButton, "#99CCFF"],
]);

function startGame() {
  startButton.addEventListener("click", function () {
    level = 1;
    playerSequence = [];
    sequence = [];
    randomSequenceGenerator();
    displaySequence();
  });
}

function randomSequenceGenerator() {
  sequence.push(buttons[Math.floor(Math.random() * buttons.length)]);
}

function displaySequence() {
  if (sequenceIndex < sequence.length) {
    let button = sequence[sequenceIndex];
    flashButton(button);
    sequenceIndex++;
    setTimeout(displaySequence, 1000);
  } else {
    sequenceIndex = 0;
    enableUserInput();
  }
}

function flashButton(button) {
  let originalColor = button.style.backgroundColor;
  let brightColor = brighterColors.get(button);
  button.style.backgroundColor = brightColor;
  setTimeout(() => {
    button.style.backgroundColor = originalColor;
  }, 500);
}

function enableUserInput() {
  buttons.forEach((button) => {
    button.addEventListener("click", userInput);
  });
}

function disableUserInput() {
  buttons.forEach((button) => {
    button.removeEventListener("click", userInput);
  });
}

function userInput(event) {
  let clickedButton = event.target;
  playerSequence.push(clickedButton);
  if (
    playerSequence[playerSequence.length - 1] !==
    sequence[playerSequence.length - 1]
  ) {
    alert("Game Over! Wrong sequence.");
    disableUserInput();
    return;
  }
  if (playerSequence.length === sequence.length) {
    level++;
    playerSequence = [];
    disableUserInput();
    setTimeout(() => {
      randomSequenceGenerator();
      displaySequence();
    }, 1000);
  }
}

function restartGame() {
  restartButton.addEventListener("click", function () {
    location.reload();
  });
}

startGame();
restartGame();
