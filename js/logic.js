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

let playerScore = 0;
let computerScore = 0;
//Define Scoring

function round () {
    let user = prompt("Please choose rock, paper, or scissors to play.");
    let userSelect = user.toLowerCase();
    let computerSelect = computerPlay();

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

function game(userSelect) {
    for (i = 0; i < 5; i++){
        round();
        console.log(result);
    }
    console.log("Game Over!")
    console.log("Final Score", "You -", playerScore,"Computer -", computerScore);
    if (computerScore > playerScore) {
        console.log ("Computer wins!");
    } else if (playerScore > computerScore) {
        console.log ("You win!")
    } else {
        console.log ("It's a tie!")
    }
    console.log ("Refresh the page to play again!");
}

game();
//Computer and User play one round of RPS