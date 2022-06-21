function computerLogic() {
       return Math.random();
}
//Computer Randomness

let x = computerLogic();
//Define Computer Randomness

function computerPlay() {

    if (x <= 0.33) {
    computerSelect = "rock";
    } else if (x <= 0.67) {
    computerSelect = "paper";
    } else {
    computerSelect = "scissors";
    }
    return computerSelect;
}
//Computer Rock Paper Scissors choice

let user = prompt("Please choose rock, paper, or scissors to play.");
let userSelect = user.toLowerCase();
//User Input

let playerScore = 0;
let computerScore = 0;
//Define Scoring

function round () {
    let computerSelect = computerPlay();
    console.log(userSelect);
    console.log(computerSelect);

    if (userSelect == "rock") {
        if (computerSelect == "rock") {
            result = "Tie!";
        } else if(computerSelect == "paper") {
            result = "Computer wins!"
            computerScore++;
        } else {
            result = "You win!"
            playerScore++;
        }
    } else if (userSelect == "paper") {
        if (computerSelect == "rock") {
            result = "You win!";
            playerScore++;
        } else if(computerSelect == "paper") {
            result = "Tie!";
        } else {
            result = "Computer wins!"
            computerScore++;
        }
    } else {
        if (computerSelect == "rock") {
            result = "Computer wins!"
            computerScore++;
        } else if(computerSelect == "paper") {
            result = "You win!";
            playerScore++;
        } else {
            result = "Tie!";
        }
    }
    return result;
}

console.log(round());
console.log(playerScore);
console.log(computerScore);
//Computer and User play one round of RPS