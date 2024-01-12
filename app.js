// Initialize Buttons
let greenButton = document.querySelector(".greenbutton");
let redButton = document.querySelector(".redbutton");
let yellowButton = document.querySelector(".yellowbutton");
let blueButton = document.querySelector(".bluebutton");
let startButton = document.querySelector(".startbutton");
let restartButton = document.querySelector(".restartbutton");

let buttons = [greenButton, redButton, yellowButton, blueButton];
let sequence = [];
let playerSequence = [];
let level = 0;
let sequenceIndex = 0;

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
    setTimeout(displaySequence, 1000); // Adjust time for next button flash
  } else {
    sequenceIndex = 0;
    enableUserInput();
  }
}

function flashButton(button) {
  let originalColor = button.style.backgroundColor;
  button.style.backgroundColor = "white"; // Change this to the highlight color
  setTimeout(() => {
    button.style.backgroundColor = originalColor;
  }, 500); // Adjust time for flash duration
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
