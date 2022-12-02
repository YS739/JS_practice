const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //3
  console.log(randomNumber);

  //   switch문 등으로 바꿔보기
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "ITS A DRAW";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "YOU WIN";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "YOU LOST";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "YOU WIN";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "YOU LOST";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "YOU WIN";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "YOU LOST";
  }
  resultDisplay.innerHTML = result;
}
