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

function play(playerSelection, computerSelection) {
  // convert inputs to Upper Case to improve simplicity
  playerSelection = playerSelection.toUpperCase(); 
  computerSelection = computerSelection.toUpperCase();
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

  // Log results
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  console.log("Result: " + result);
}

function play2() {
  // same as play() with user input in place of playerSelection and computerPlay() run within the script, rather than as a variable/input
  playerSelection = prompt("Please enter one of \"ROCK\", \"PAPER\" or \"SCISSORS\"");
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

  // Log results
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);
  console.log("Result: " + result);
}