function computerPlay() {
  let option = Math.floor(Math.random() * 3) + 1; // generates random number between 1 and 3 inclusive
  switch(option) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function play(playerSelection, computerSelection) {
  // convert inputs to Upper Case to improve simplicity
  playerSelection = playerSelection.toUpperCase(); 
  computerSelection = computerSelection.toUpperCase();
  switch(playerSelection) {
    case "ROCK": // Player selects "ROCK"
      if (computerSelection == "ROCK") {
        return "Draw";
      } else if (computerSelection == "PAPER") {
        return "Computer Wins";
      } else if (computerSelection == "SCISSORS") {
        return "Player Wins";
      }
    case "PAPER": // Player selects "PAPER"
      if (computerSelection == "ROCK") {
        return "Player Wins";
      } else if (computerSelection == "PAPER") {
        return "Draw";
      } else if (computerSelection == "SCISSORS" ) {
        return "Computer Wins";
      }
    case "SCISSORS": // Player selects "SCISSORS"
      if (computerSelection == "ROCK") {
        return "Computer Wins";
      } else if (computerSelection == "PAPER") {
        return "Player Wins";
      } else if (computerSelection == "SCISSORS") {
        return "Draw";
      }
  }
}

// Set Scoreboard Variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// 5 Game Loop
for (i = 0; i < 6 ; i++) {
  if ( play("ROCK", computerPlay()) == "Computer Wins" ) {
    computerScore += 1;
  } else if ( play("ROCK", computerPlay()) == "Player Wins" ) {
    playerScore += 1;
  } else if ( play("ROCK", computerPlay()) == "Computer Wins" ) {
    drawScore += 1;
  };
};

// Log Scores to Console
console.log("Computer Score: " + computerScore);
console.log("Player Score: " + playerScore);
console.log("Draw Score: " + drawScore);