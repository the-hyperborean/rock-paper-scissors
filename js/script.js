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

alert(computerPlay())