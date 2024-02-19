"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let scoreNumber = 20;
let highScore = 0;

const changeStyle = function (color, width) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".guess-mark").style.width = width;
};

const resultMessage = (message) =>
  (document.querySelector(".result-message").textContent = message);

document.querySelector(".again-button").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreNumber = 20;
  console.log(secretNumber);

  document.querySelector(".guess-mark").textContent = "?";
  document.querySelector(".score").textContent = scoreNumber;
  resultMessage("Start Guessing!");
  document.querySelector(".input-number").value = "";

  changeStyle("#333", "15rem");
});

document.querySelector(".check-button").addEventListener("click", function () {
  const inputtedNumber = Number(document.querySelector(".input-number").value);

  if (!inputtedNumber || inputtedNumber < 1) {
    resultMessage("No Number!");
  } else if (inputtedNumber === secretNumber) {
    document.querySelector(".guess-mark").textContent = secretNumber;
    resultMessage("Correct Number!");
    changeStyle("#60b347", "25rem");

    if (highScore < scoreNumber) {
      //scoreNumber > highScore
      highScore = scoreNumber;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (inputtedNumber !== secretNumber) {
    resultMessage(
      inputtedNumber > secretNumber ? "Number Is High!" : "Number Is Low"
    );
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } /* else if (inputtedNumber > secretNumber && scoreNumber > 1) {
    document.querySelector(".result-message").textContent = "Number Is High!";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } else if (inputtedNumber < secretNumber && scoreNumber > 1) {
    document.querySelector(".result-message").textContent = "Number Is Low!";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } */ else {
    document.querySelector(".score").textContent = 0;
    resultMessage("You Lost The Game!");
  }
});
