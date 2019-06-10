function computerPlay() {
  let option = Math.floor(Math.random() * 3) + 1; // generates random number between 1 and 3 inclusive
  switch(option) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

function playRound(e) {
  // same as play() with user input in place of playerSelection and computerPlay() run within the script, rather than as a variable/input
  playerSelection = e.target.id;
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerPlay();
  let result = "";
  switch(playerSelection) {
    case "ROCK": // Player selects "ROCK"
      if (computerSelection == "ROCK") {
        result = "Draw";
        break;
      } else if (computerSelection == "PAPER") {
        result = "Computer Wins";
        break;
      } else if (computerSelection =="SCISSORS") {
        result = "Player Wins";
        break;
      }
    case "PAPER": // Player selects "PAPER"
      if (computerSelection == "ROCK") {
        result = "Player Wins";
        break;
      } else if (computerSelection == "PAPER") {
        result = "Draw";
        break;
      } else if (computerSelection == "SCISSORS" ) {
        result = "Computer Wins";
        break;
      }
    case "SCISSORS": // Player selects "SCISSORS"
      if (computerSelection == "ROCK") {
        result = "Computer Wins";
        break;
      } else if (computerSelection == "PAPER") {
        result = "Player Wins";
        break;
      } else if (computerSelection == "SCISSORS") {
        result = "Draw";
        break;
      }
  }

  // Game Scores
  const playerSelectionText = document.querySelector('#playerSelection');
  playerSelectionText.textContent = playerSelection;
  const computerSelectionText = document.querySelector('#computerSelection');
  computerSelectionText.textContent = computerSelection;
  const resultText = document.querySelector('#result');
  resultText.textContent = result;
  if (result == 'Player Wins') {
    resultText.classList.remove('blue');
    resultText.classList.add('green');
    resultText.classList.remove('red');
  } else if (result == 'Computer Wins') {
    resultText.classList.remove('blue');
    resultText.classList.remove('green');
    resultText.classList.add('red');
  } else if (result == 'Draw') {
    resultText.classList.add('blue');
    resultText.classList.remove('green');
    resultText.classList.remove('red');
  }

  // Scoreboard
  const roundText = document.querySelector('#round');
  const playerScoreText = document.querySelector('#playerScore');
  const computerScoreText = document.querySelector('#computerScore');
  const drawScoreText = document.querySelector('#drawScore');
  roundText.textContent = Number(roundText.textContent) + 1;
  if (result == 'Player Wins') {
    playerScoreText.textContent = Number(playerScoreText.textContent) + 1;
  } else if (result == 'Computer Wins') {
    computerScoreText.textContent = Number(computerScoreText.textContent) + 1;
  } else if (result == 'Draw') {
    drawScoreText.textContent = Number(drawScoreText.textContent) + 1;
  }

  // Result
  if (roundText.textContent == 5 && Number(playerScoreText.textContent) > Number(computerScoreText.textContent) ) {
    let node = document.createElement('h2');
    let textnode = document.createTextNode('Player Wins!');
    node.appendChild(textnode);
    drawScoreText.appendChild(node);
  } else if (roundText.textContent == 5 && Number(computerScoreText.textContent) > Number(playerScoreText.textContent) ) {
    let node = document.createElement('h2');
    let textnode = document.createTextNode('Computer Wins!');
    node.appendChild(textnode);
    drawScoreText.appendChild(node);
  } else if (roundText.textContent == 5) {
    let node = document.createElement('h2');
    let textnode = document.createTextNode('Draw!');
    node.appendChild(textnode);
    drawScoreText.appendChild(node);
  }
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let round;

const btns = document.querySelectorAll('button');
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', playRound);
}